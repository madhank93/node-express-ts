import express from 'express';
import mongoose from 'mongoose';
import { Config } from './config/config';

const app = express();

const mongoURL = `mongodb://${Config.MONGO_USER}:${Config.MONGO_PASSWORD}@${Config.MONGO_IP}:${Config.MONGO_PORT}/?authSource=admin`;

mongoose
    .connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('Ran successfully'))
    .catch((err) => console.log(err));
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h2>Hi, there. This is Madhan K</h2>');
});

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
