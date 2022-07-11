require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const userRouter = require('./src/user/index');
const bandsRouter = require('./src/bands');
const musiciansRouter = require('./src/musicians');
const adminRouter = require('./src/admin');

//establish connection to Mongodb
const DB_CONNECT = process.env.DB_CONNECT || "";

mongoose.connect(
    DB_CONNECT,
    () => console.log('connected to db')
);

const app = express();
app.use(cors());

//increased data size to be able to send base64 string
app.use(bodyParser.json({limit: '50mb'}));

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/bands', bandsRouter);
app.use('/api/musicians', musiciansRouter);
app.use('/api/admin', adminRouter);

//change port to 8080
app.listen(8080, () => console.log('Server running on 8080'));