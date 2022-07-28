/*  This file will add admin data to the database
    email: admin@bandup.com
    password: 123123

    Terminal Command: npm run seed
*/

require("dotenv").config();
const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

//establish connection to Mongodb because the seed files will be run seperately
const DB_CONNECT = process.env.DB_CONNECT || "";

mongoose.connect(
    DB_CONNECT,
    () => console.log('connected to db')
);

//seed the database with the admin data
async function seedDB(){

    try{
        const salt = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash('123123', salt);

       var admin = await User({
        name: "Admin",
        email: 'admin@bandup.com',
        password: hash_password,
        user_type: 0
    });
       await admin.save();
    }catch(error){
        console.log(error);
    }
}

//close connection to db
seedDB().then(()=>{
    console.log("The admin was seeded successfully");
    mongoose.connection.close();
})