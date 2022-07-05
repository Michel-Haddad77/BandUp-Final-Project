const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Band = require('../../../models/Band');
const Musician = require('../../../models/Musician');

async function register(req,res){
    try{
        console.log(req.body); //body is a raw JSON file

        //if user_type is a band
        if (req.body.user_type === 1){

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
            var user = new Band({
                name,
                email,
                password: hashPassword,
                user_type,
                genres: new mongoose.Types.ObjectId(genre_id),
            });

        //if user_type is a musician
        }else if(req.body.user_type === 2){
            //get name and email from request body
            const {
                name,
                last_name,
                email,
                user_type,
                instrument_id,
            } = req.body;

            console.log("this is instrument id" + instrument_id);

            //encrypt the password and add salt
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password, salt);

            //create new user document from mongoose model
            var user = new Musician({
                name,
                last_name,
                email,
                password: hashPassword,
                user_type,
                instruments: new mongoose.Types.ObjectId(instrument_id),
            });
        }
        
        //save user document in db
        const added_user = await user.save();

        console.log('addUserResult =>', added_user); //or user
        return res.send(added_user);
        
    }catch(error){
        console.log(error);
    }   
}

module.exports = {
    register,
  };