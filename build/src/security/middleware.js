"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
var jwt = require("./jwt");
var PATH_WITHOUT_JWT = ['/users/login', '/users/register', '/search/searchGame', '/games/addGame'];
function middleware(req, res, next) {
    // console.log('BODY::', req.body)
    // console.log('QUERY::', req.query)
    if (!PATH_WITHOUT_JWT.includes(req.path)) {
        if (req.headers && req.headers.authorization) {
            var token = req.headers.authorization.split(" ")[1];
            jwt.verifyJWT(token).then(function (res) {
                if (res) {
                    next();
                }
                else {
                    res.status(401).send();
                }
            }, function () {
                res.status(401).send();
            });
        }
        else {
            res.status(401).send();
        }
    }
    else {
        next();
    }
}
exports.middleware = middleware;
