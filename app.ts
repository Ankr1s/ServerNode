import * as express from 'express';
import * as mongoose from 'mongoose';
import { json } from 'body-parser';
import * as Routes from './src/routes/Routes';
import { middleware } from "./src/security/middleware";

const app = express();

app.use(json());
app.use(middleware);
app.use(Routes);
app.listen(process.env.PORT || 3000, (): void => {
    mongoose.set('useFindAndModify', false);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect('mongodb+srv://test:051298@cluster0.gaugs.mongodb.net/AppDataBase?retryWrites=true&w=majority', {useNewUrlParser: true}).then( (connection: typeof mongoose) => {
        if (connection) {
            console.log('Node is ready and connected to MongoDB')
        }
    })
});