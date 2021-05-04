import express from 'express';
import mongoose from 'mongoose';
import { Config } from './config/config';
import postRouter from './routes/postRoutes';

const app = express();

const mongoURL = `mongodb://${Config.MONGO_USER}:${Config.MONGO_PASSWORD}@${Config.MONGO_IP}:${Config.MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
    mongoose
        .connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => console.log('Ran successfully'))
        .catch((err) => {
            console.log(err);
            setTimeout(connectWithRetry, 5000);
        });
};

connectWithRetry();

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h2>Hi, there. This is Madhan K</h2>');
});

app.use('/api/v1/posts', postRouter);

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
