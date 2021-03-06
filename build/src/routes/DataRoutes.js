"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var express_1 = require("express");
var DataRouter = express_1.Router();
var puppeteer = require('puppeteer');
var GameModel = require('../models/GameModel').GameModel;
var NotificationModel = require('../models/NotificationModel').NotificationModel;
DataRouter.post("/addGame", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, name, startDate, finishDate, duration, description, payload, game, games, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, name = _a.name, startDate = _a.startDate, finishDate = _a.finishDate, duration = _a.duration, description = _a.description;
                payload = {
                    email: email,
                    name: name,
                    startDate: startDate,
                    finishDate: finishDate,
                    duration: duration,
                    description: description
                };
                game = new GameModel(payload);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                return [4 /*yield*/, GameModel.findOne({ name: name })];
            case 2:
                games = _b.sent();
                if (!(games != null)) return [3 /*break*/, 3];
                res.status(400).send();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, game.save()];
            case 4:
                _b.sent();
                res.send({ game: game });
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _b.sent();
                res.status(500).send(error_1);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
DataRouter.post("/getGames", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, games, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                email = req.body.email;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, GameModel.find({ email: email })];
            case 2:
                games = _a.sent();
                if (games == null) {
                    res.status(400).send();
                }
                else {
                    res.send(games);
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                res.status(500).send(error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
DataRouter.post("/addNotification", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, price, payload, notification, notifications, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, price = _a.price;
                payload = {
                    name: name,
                    price: price
                };
                notification = new NotificationModel(payload);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                return [4 /*yield*/, NotificationModel.findOne({ name: name })];
            case 2:
                notifications = _b.sent();
                if (!(notifications != null)) return [3 /*break*/, 3];
                res.status(400).send();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, notification.save()];
            case 4:
                _b.sent();
                res.send({ game: notification });
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_3 = _b.sent();
                res.status(500).send(error_3);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
DataRouter.get("/getNotifications", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var notifications, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, NotificationModel.find({})];
            case 1:
                notifications = _a.sent();
                if (notifications == null) {
                    res.status(400).send();
                }
                else {
                    res.send({ notifications: notifications });
                }
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.status(500).send(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
module.exports = DataRouter;
