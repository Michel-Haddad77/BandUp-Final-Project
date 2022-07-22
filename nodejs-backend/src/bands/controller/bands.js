const Band = require('../../../models/Band');
const Musician = require('../../../models/Musician');
const mongoose = require('mongoose');
const Genre = require('../../../models/Genre');

//API that get all bands
async function getAllBands(req,res){
    try{
        const bands = await Band.find().populate('genre');
        return res.send(bands);
    } catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

//API that gets the recently registered bands
async function getRecentBands(req,res){
    try{
        //get the 2 last registered bands
        const bands = await Band.find().populate('genre').sort('-date').limit(3);
        return res.send(bands);
    } catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

//API called when the band requests the musician to apply
async function requestToApply(req,res){
    try{
        const {
            id,
            musician_id,
        } = req.body;

        const band = await Band.findById(id);
        const musician = await Musician.findById(musician_id);
        
        //check if the musician wasn't already requested
        if (!band.requested.includes(musician._id)){

            //add the musician id to the 'requested' array in band
            band.requested.push(musician); //mongoose takes the document instance and only adds its id to the array
            band.save();
    
            res.status(200).send("Musician was requested successfully");
            return //to end the function here
        }
        
        res.send("Musician already requested");
    } catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

//API that gets all the bands of the same genre
//expected request contains genre_id
async function getByGenre(req,res){
    try{
        const bands = await Band.find({genre: new mongoose.Types.ObjectId(req.query.genre_id)}).populate('genre');
        return res.send(bands);

    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

//API to get all the band genres
async function getAllGenres(req,res){
    try{
        const genres = await Genre.find();
        return res.send(genres);

    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }

};

async function getNearbyBands(req,res){
    try{
        // lat/long of the user
        var lat1 = req.query.lat;
        var long1 = req.query.long;

        const bands = await Band.find().populate('genre');
        var recent_bands = [];

        bands.forEach((band)=>{
            // lat/long for each band
            var lat2 = band.location.lat;
            var long2 = band.location.long;

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

            //if distance is less than 5KM
            if (dist <= 5){
                recent_bands.push(band);
            }
        })

        console.log(recent_bands);
        return res.send(recent_bands);

    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = {
    getAllBands,
    getRecentBands,
    requestToApply,
    getByGenre,
    getAllGenres
}