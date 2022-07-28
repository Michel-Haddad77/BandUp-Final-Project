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
                mobile,
                email,
                description,
                user_type,
                genre_id,
                picture,
                location,
            } = req.body;

            //console.log("this is genre id" + genre_id);

            //encrypt the password and add salt
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password, salt);

            //create new user document from mongoose model
            var user = new Band({
                name,
                mobile,
                email,
                password: hashPassword,
                description,
                user_type,
                picture,
                location,
                genre: new mongoose.Types.ObjectId(genre_id), //if genre_id was not provided, ObjectID generates a random id
            });

        //if user_type is a musician
        }else if(req.body.user_type === 2){
            //get name and email from request body
            const {
                name,
                last_name,
                mobile,
                email,
                description,
                user_type,
                picture,
                location,
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
                mobile,
                email,
                description,
                password: hashPassword,
                user_type,
                picture,
                location,
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
            password,
            expo_token
        } = req.body;

        //check if email exists
        var user = await User.findOne({email})
        if (!user) return res.status(400).send("Incorrect Email");

        //check if password matches
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).send("Incorrect Password");

        //create jwt token and send it in response
        const token = jwt.sign(
            {_id:user._id, name: user.name, email: user.email, type: user.user_type}, TOKEN_SECRET
        );

        //populate either the genre or instrument field
        if(user.user_type === 1){
            user = await user.populate('genre');
        }else if(user.user_type === 2){
            user = await user.populate('instrument');
        }

        //add or update expo push token of logged in user (for notifications)
        await user.updateOne({expo_token: expo_token});

        return res.header('auth-token',token).send({
            token: token,
            user_info: user
        });

    } catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

//API called when user logs out to stop receiving notifications on the device
async function deleteExpoToken(req,res){
    try{
        //remove expo token
        await User.findByIdAndUpdate(req.body.id, {expo_token: ""});

        return res.send("Success");

    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

//get user by id
async function getUser(req, res) {
    try {
        const id = req.query.id;

        const result = await User.findById(id);
        return res.send(result);
  
    } catch (error) {
      console.log(error);
    }
  }

async function updateUser(req, res) {
    try {
        const {
            name,
            last_name,
            mobile,
            email,
            picture,
            location,
            video,
        } = req.body;

        const updated_user = await User.findByIdAndUpdate(req.query.id, {
            name, 
            last_name, 
            email,
            picture, 
            location,
            video
        });

        return res.send("User updated");
    } catch (error) {
        console.log(error);
    }
}

async function uploadVideo(req,res){
    try{
        //update the  user's video field in the database
        const updated_user = await User.findByIdAndUpdate(req.query.id, {
            video: req.file.filename 
        });

        return res.send(`Video uploaded: ${req.file.filename}`);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
    
}

module.exports = {
    register,
    login,
    deleteExpoToken,
    getUser,
    updateUser,
    uploadVideo
  };