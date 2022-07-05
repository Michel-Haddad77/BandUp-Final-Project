require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const userRouter = require('./src/user/index');

//establish connection to Mongodb
const DB_CONNECT = process.env.DB_CONNECT || "";

mongoose.connect(
    DB_CONNECT,
    () => console.log('connected to db')
);

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/user', userRouter);

//change port to 8080
app.listen(8080, () => console.log('Server running on 8080'));