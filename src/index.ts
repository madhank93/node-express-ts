import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h2>Hi, there. This is Madhan K</h2>');
});

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
