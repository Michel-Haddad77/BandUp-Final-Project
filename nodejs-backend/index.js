require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const Band = require('./models/Band');

// const userRouter = require('./src/user/index');

//establish connection to Mongodb
const DB_CONNECT = process.env.DB_CONNECT || "";

mongoose.connect(
    DB_CONNECT,
    () => console.log('connected to db')
);

const app = express();
app.use(cors());
app.use(express.json());

//testing the discriminator
app.post("/", async (req, res) =>{
    try{
        console.log(req.body); //body is a raw JSON file

        //get name and email from request body
        const {
            name,
            email,
            user_type,
            genre_id,
        } = req.body;

        console.log("this is genre id" + genre_id);

        //encrypt the password and add salt
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        //create new user document from mongoose model
        const user = new Band({
            name,
            email,
            password: hashPassword,
            user_type,
            genres: new mongoose.Types.ObjectId(genre_id),
        });

        //save user document in db
        const added_user = await user.save();

        console.log('addUserResult =>', added_user); //or user
        return res.send(added_user);
        
    }catch(error){
        console.log(error);
    }   
})

//change port to 8080
app.listen(8080, () => console.log('Server running on 8080'));