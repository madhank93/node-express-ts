import express from 'express';
import mongoose from 'mongoose';
import { Config } from './config/config';
import postRouter from './routes/postRoutes';
import userRouter from './routes/userRoute';
import session from 'express-session';
import redis from 'redis';
import connectRedis from 'connect-redis';

const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
    host: Config.REDIS_URL,
    port: Config.REDIS_PORT,
});

redisClient.on('error', function (err) {
    console.log('could not establish a connection with redis. ' + err);
});

redisClient.on('connect', function () {
    console.log('connected to redis successfully');
});

const app = express();

const mongoURL = `mongodb://${Config.MONGO_USER}:${Config.MONGO_PASSWORD}@${Config.MONGO_IP}:${Config.MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
    mongoose
        .connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => console.log('Successfully connected to mongo db'))
        .catch((err) => {
            console.log(err);
            setTimeout(connectWithRetry, 5000);
        });
};

connectWithRetry();

app.enable('trust proxy');
//app.use(cors({}));

app.use(
    session({
        store: new RedisStore({ client: redisClient }),
        secret: Config.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            httpOnly: false,
            maxAge: 30000,
        },
    }),
);

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/api/v1', (req, res) => {
    res.send('<h2>Hi, there. This is Madhan K</h2>');
    console.log('api is up and running');
});

app.use('/api/v1/posts', postRouter);

app.use('/api/v1/user', userRouter);

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
