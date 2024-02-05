const http = require('http');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./src/router');

const port = process.env.PORT || 3333;

dotenv.config();

const app = express();

app.use(express.json());

// app.use(cors({
//     allowedHeaders: '*',
//     origin: ["http://localhost:3000", "http://localhost:8080", "*"],
//     credentials: true,
// }));

const server = http.createServer((req, res) => {
    console.log("server started");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World');
});

app.get('/', (req, res) => {
    res.send("backend is working")
})


app.use(morgan('tiny'));

app.use(router);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`starting on port ${port}`);
    app.listen(port);
})