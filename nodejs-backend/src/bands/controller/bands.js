const Band = require('../../../models/Band');
const Musician = require('../../../models/Musician');

async function getAllBands(req,res){
    try{
        const bands = await Band.find();
        return res.send(bands);
    } catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

async function getRecentBands(req,res){
    try{
        //get the 2 last added bands
        const bands = await Band.find().sort('-date').limit(2);
        return res.send(bands);
    } catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

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

module.exports = {
    getAllBands,
    getRecentBands,
    requestToApply,
}