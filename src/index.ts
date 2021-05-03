import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose
    .connect('mongodb://admin:admin@172.25.0.2:27017/?authSource=admin', () => console.log('success now'))
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h2>Hi, there. This is Madhan K</h2>');
});

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
