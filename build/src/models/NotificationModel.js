"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var notificationSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    price: {
        type: String
    }
});
var NotificationModel = mongoose.model('notification', notificationSchema);
module.exports.notificationSchema = notificationSchema;
module.exports.NotificationModel = NotificationModel;
