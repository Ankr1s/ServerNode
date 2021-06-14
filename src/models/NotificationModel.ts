import * as mongoose from 'mongoose';
import * as jwt from '../security/jwt';


const { Schema } = mongoose;

const notificationSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    price: {
        type: String
    }
});


const NotificationModel = mongoose.model('notification', notificationSchema);

module.exports.notificationSchema = notificationSchema;
module.exports.NotificationModel = NotificationModel;