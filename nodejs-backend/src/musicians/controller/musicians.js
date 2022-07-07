const Band = require('../../../models/Band');
const Musician = require('../../../models/Musician');

//API that gets all musicians
async function getAllMusicians(req,res){
    try{
        const musicians = await Musician.find();
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
        const musicians = await Musician.find().sort('-date').limit(2);
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

module.exports = {
    getAllMusicians,
    getRecentMusicians,
    apply,
}