const Band = require('../../../models/Band');

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

module.exports = {
    getAllBands,
    getRecentBands,
}