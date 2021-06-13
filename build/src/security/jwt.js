"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.verifyJWT = exports.generateJWT = void 0;
var jwt = require("jsonwebtoken");
var key = "pbdG;/H._pCN_t$a?zqt>ycF)B}~H:7.a,P5#w3riouYBP*UFiOF_0Ua;}eYaq";
function generateJWT(payload, expiresIn) {
    if (payload === void 0) { payload = {}; }
    if (expiresIn === void 0) { expiresIn = "1h"; }
    return jwt.sign(payload, key, { expiresIn: expiresIn });
}
exports.generateJWT = generateJWT;
function verifyJWT(token) {
    return new Promise(function (resolve, reject) {
        if (token) {
            jwt.verify(token, key, function (err, decoded) {
                if (!err) {
                    resolve(true);
                }
                else {
                    reject(null);
                }
            });
        }
        else {
            reject(null);
        }
    });
}
exports.verifyJWT = verifyJWT;
function decodeToken(token) {
    return jwt.decode(extractBearer(token));
}
exports.decodeToken = decodeToken;
function extractBearer(token) {
    var extractedToken = token.split(" ")[1];
    return extractedToken || token;
}
