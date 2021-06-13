import * as mongoose from 'mongoose';
import * as jwt from '../security/jwt';

const { Schema } = mongoose;

const regexEmail = (v: any) => {
    return /(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-][a-z0-9])?|[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])).){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/.test(v);
}


const userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    jwt: {
        type: String
    }
});


const UserModel = mongoose.model('users', userSchema);

module.exports.userSchema = userSchema;
module.exports.UserModel = UserModel;