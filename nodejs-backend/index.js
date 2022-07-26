require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');


const userRouter = require('./src/user/index');
const bandsRouter = require('./src/bands');
const musiciansRouter = require('./src/musicians');
const adminRouter = require('./src/admin');
const notificationsRouter = require('./src/notifications');

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

//routes
app.use('/api/user', userRouter);
app.use('/api/bands', bandsRouter);
app.use('/api/musicians', musiciansRouter);
app.use('/api/admin', adminRouter);
app.use('/api/notifications', notificationsRouter);

//change port to 8080
app.listen(8080, () => console.log('Server running on 8080'));


//Multer configuration to handle uploading videos
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'assets')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
   
var upload = multer({ storage: storage });

module.exports = upload;
