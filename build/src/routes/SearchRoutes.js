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
var searchRouter = express_1.Router();
var puppeteer = require('puppeteer');
searchRouter.get("/searchGame", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var url, browser, page, elementos, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "https://www.allkeyshop.com/blog/buy-sea-of-thieves-cd-key-compare-prices/";
                return [4 /*yield*/, puppeteer.launch({
                        headless: false
                    })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                _a.label = 3;
            case 3:
                _a.trys.push([3, 8, , 10]);
                return [4 /*yield*/, page.goto(url, {
                        waitUntil: ["load", "domcontentloaded", "networkidle0", "networkidle2"]
                    })];
            case 4:
                _a.sent();
                return [4 /*yield*/, page.waitForSelector('#offer_offer')];
            case 5:
                _a.sent();
                return [4 /*yield*/, page.evaluate(function () {
                        var _a;
                        var img = (_a = document.querySelector('#gamepageSlider > div.gamepage__slide.gallery-slider.showing > a > img')) === null || _a === void 0 ? void 0 : _a.getAttribute('src');
                        var elemnts = Array.from(document.querySelectorAll('#offer_offer'));
                        var webs = elemnts.map(function (element) {
                            var _a, _b, _c, _d, _e, _f;
                            var tmp = {};
                            tmp.imgGame = img;
                            tmp.web = (_a = element.querySelector('#offer_merchant_name')) === null || _a === void 0 ? void 0 : _a.innerHTML;
                            if (((_b = element.querySelector('#offer_has_coupon > div.price > span.price-value')) === null || _b === void 0 ? void 0 : _b.textContent) == null) {
                                tmp.precio = (_d = (_c = element.querySelector('#offer_has_not_coupon > span > span')) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.replace(/\s/g, '');
                            }
                            else {
                                tmp.precio = ((_f = (_e = element.querySelector('#offer_has_coupon > div.price > span.price-value')) === null || _e === void 0 ? void 0 : _e.textContent) === null || _f === void 0 ? void 0 : _f.replace(/\s/g, '')) + " Price with coupon";
                            }
                            return tmp;
                        });
                        return webs;
                    })];
            case 6:
                elementos = _a.sent();
                return [4 /*yield*/, browser.close()];
            case 7:
                _a.sent();
                res.send(elementos);
                return [3 /*break*/, 10];
            case 8:
                error_1 = _a.sent();
                return [4 /*yield*/, browser.close()];
            case 9:
                _a.sent();
                res.status(500).send(error_1);
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); });
module.exports = searchRouter;
