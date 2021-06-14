"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var gameSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    startDate: {
        type: String
    },
    finishDate: {
        type: String
    },
    duration: {
        type: String
    },
    description: {
        type: String
    }
});
var GameModel = mongoose.model('games', gameSchema);
module.exports.gameSchema = gameSchema;
module.exports.GameModel = GameModel;
