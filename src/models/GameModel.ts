import * as mongoose from 'mongoose';
import * as jwt from '../security/jwt';

const { Schema } = mongoose;

const gameSchema = new Schema({
    email: {
        type: String
    },name: {
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


const GameModel = mongoose.model('games', gameSchema);

module.exports.gameSchema = gameSchema;
module.exports.GameModel = GameModel;