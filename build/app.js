"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var body_parser_1 = require("body-parser");
var Routes = require("./src/routes/Routes");
var middleware_1 = require("./src/security/middleware");
var app = express();
app.use(body_parser_1.json());
app.use(middleware_1.middleware);
app.use(Routes);
app.listen(process.env.PORT || 3000, function () {
    mongoose.set('useFindAndModify', false);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect('mongodb+srv://test:051298@cluster0.gaugs.mongodb.net/AppDataBase?retryWrites=true&w=majority', { useNewUrlParser: true }).then(function (connection) {
        if (connection) {
            console.log('Node is ready and connected to MongoDB');
        }
    });
});
