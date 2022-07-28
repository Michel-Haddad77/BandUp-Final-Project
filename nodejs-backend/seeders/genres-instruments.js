/*  This file will add 4 genres and 4 instruments along with pictures to the database
    Genres: Rock, Hard Rock, Metal, Jazz
    Instruments: Guitar, Singer, Drums, Bass

    Terminal Command: npm run seed-genres
*/
require("dotenv").config();
const mongoose = require('mongoose');
const Genre = require('../models/Genre');
const Instrument = require('../models/Instrument');

//establish connection to Mongodb because the seed files will be run seperately
const DB_CONNECT = process.env.DB_CONNECT || "";

mongoose.connect(
    DB_CONNECT,
    () => console.log('connected to db')
);

const fs = require('fs');

//Genre Pics
var hard_rock_pic = fs.readFileSync( __dirname + '/assets/hard-rock.jpg', 'base64');
var rock_pic = fs.readFileSync( __dirname + '/assets/rock.jpg', 'base64');
var metal_pic = fs.readFileSync( __dirname + '/assets/metal.jpg', 'base64');
var jazz_pic = fs.readFileSync( __dirname + '/assets/jazz.jpg', 'base64');

//Instrument Pics
var guitar_pic = fs.readFileSync( __dirname + '/assets/guitar.jpg', 'base64');
var singer_pic = fs.readFileSync( __dirname + '/assets/singer.jpg', 'base64');
var drums_pic = fs.readFileSync( __dirname + '/assets/drummer.jpg', 'base64');
var bass_pic = fs.readFileSync( __dirname + '/assets/bass.jpg', 'base64');

//Genres to seed
const genres = [
    {
        genre_name: "Hard Rock",
        picture: hard_rock_pic
    },
    {
        genre_name: "Rock",
        picture: rock_pic
    },
    {
        genre_name: "Metal",
        picture: metal_pic
    },
    {
        genre_name: "Jazz",
        picture: jazz_pic
    },
]

//Instruments to seed
const instruments = [
    {
        instrument_name: "Guitar",
        picture: guitar_pic
    },
    {
        instrument_name: "Singer",
        picture: singer_pic
    },
    {
        instrument_name: "Drums",
        picture: drums_pic
    },
    {
        instrument_name: "Bass",
        picture: bass_pic
    },
]

//seed the database with the default genres
async function seedDB(){

    try{
        await Genre.insertMany(genres);
        await Instrument.insertMany(instruments);
       
    }catch(error){
        console.log(error);
    }
}

//close connection to db
seedDB().then(()=>{
    console.log("Genres and instruments were seeded successfully");
    mongoose.connection.close();
})