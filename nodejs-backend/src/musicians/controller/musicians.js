const Band = require('../../../models/Band');
const Musician = require('../../../models/Musician');
const mongoose = require('mongoose');
const Instrument = require('../../../models/Instrument');

//API that gets all musicians
async function getAllMusicians(req,res){
    try{
        const musicians = await Musician.find().populate('instrument');
        return res.send(musicians);
    } catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

//API that gets the recently registered musicians
async function getRecentMusicians(req,res){
    try{
        //get the last 2 added musicians
        const musicians = await Musician.find().sort('-date').limit(3).populate('instrument');
        return res.send(musicians);
    } catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

//API called when the musician applies for a band
async function apply(req,res){
    try{
        const {
            id,
            band_id,
        } = req.body;

        const musician = await Musician.findById(id);
        const band = await Band.findById(band_id);
        
        //check if the musician already applied to band
        if (!musician.applied.includes(band._id)){

            //add the band id to the 'applied' array in musician
            musician.applied.push(band); //mongoose takes the document instance and only adds its id to the array
            musician.save();
    
            res.status(200).send("Applied to band successfully");
            return //to end the function here
        }
        
        res.send("Already Applied to this band");
    } catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

//API that gets all the bands of the same genre
//expected request contains instrument_id
async function getByInstrument(req,res){
    try{
        const musicians = await Musician.find({instrument: new mongoose.Types.ObjectId(req.query.instrument_id)}).populate('instrument');
        return res.send(musicians);

    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

//API to get all the musician instruments
async function getAllInstruments(req,res){
    try{
        const instruments = await Instrument.find();
        return res.send(instruments);

    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }

};

async function getNearbyMusicians(req,res){
    try{
        // lat/long of the user
        var lat1 = req.query.lat;
        var long1 = req.query.long;

        const musicians = await Musician.find().populate('instrument');
        var recent_musicians = [];

        musicians.forEach((musician)=>{
            var lat2 = musician.location.lat;
            var long2 = musician.location.long;

            //distance calculation in KM
            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = long1-long2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 111.2;

            //if distance is less than 10KM
            if (dist <= 10){
                recent_musicians.musician;
            }
        })

        console.log(recent_musicians);
        return res.send(recent_musicians);

    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = {
    getAllMusicians,
    getRecentMusicians,
    apply,
    getByInstrument,
    getAllInstruments,
}