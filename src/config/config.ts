export const Config = {
    MONGO_IP: process.env.MONGO_IP || 'mongo-db',
    MONGO_PORT: parseInt(process.env.MONGO_PORT) || 27017,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    REDIS_URL: process.env.REDIS_URL || 'redis-db',
    REDIS_PORT: parseInt(process.env.REDIS_PORT) || 6379,
    SESSION_SECRET: process.env.SESSION_SECRET,
};
