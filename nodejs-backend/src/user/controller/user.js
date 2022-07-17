const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Band = require('../../../models/Band');
const Musician = require('../../../models/Musician');
const User = require('../../../models/User');
const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.TOKEN_SECRET || "";

//register API
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

            //console.log("this is genre id" + genre_id);

            //encrypt the password and add salt
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password, salt);

            //create new user document from mongoose model
            var user = new Band({
                name,
                email,
                password: hashPassword,
                user_type,
                genre: new mongoose.Types.ObjectId(genre_id), //if genre_id was not provided, ObjectID generates a random id
            });

        //if user_type is a musician
        }else if(req.body.user_type === 2){
            //get name and email from request body
            const {
                name,
                last_name,
                email,
                user_type,
                picture,
                instrument_id,
            } = req.body;

            //console.log("this is instrument id" + instrument_id);

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
                picture,
                instrument: new mongoose.Types.ObjectId(instrument_id), 
            });
        }
        
        //save user document in db
        const added_user = await user.save();

        console.log('addUserResult =>', added_user); //or user
        return res.send(added_user);
        
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }   
}

//login API
async function login(req,res){
    try{
        const {
            email,
            password
        } = req.body;

        //check if email exists
        const user = await User.findOne({email});
        if (!user) return res.status(400).send("Incorrect Email");

        //check if password matches
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).send("Incorrect Password");

        //create jwt token and send it in response
        const token = jwt.sign(
            {_id:user._id, name: user.name, email: user.email}, TOKEN_SECRET
        );

        return res.header('auth-token',token).send({
            token: token,
            id: user._id
        });

    } catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = {
    register,
    login
  };