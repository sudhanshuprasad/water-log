const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

const redisclient = require('./redisConnect');

const PORT = 3000;
const app = express();

app.use(express.json());

const router = require('./src/router');

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Redis server is working");
});

app.use('/api', router);

app.listen(PORT, (error) => {
    if (!error)
        console.log("Listening on port "+ PORT)
    else
            console.log("Error occurred, server can't start", error);
}
);