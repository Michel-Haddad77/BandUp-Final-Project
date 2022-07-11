const Instrument = require('../../../models/Instrument');
const Genre = require('../../../models/Genre');

//API when admin adds a new genre
async function addGenre(req,res){
    try{
        const {
            genre_name,
            picture
        } = req.body;

        //check if genre exists
        const existing_genre = await Genre.findOne({genre_name});
        if (existing_genre) return res.status(406).send("Genre Already Exists");

        new_genre = new Genre({
            genre_name,
            picture
        })

        //save genre document in db
        const added_genre = await new_genre.save();
        return res.send(added_genre);

    } catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

//API when admin adds a new instrument
async function addInstrument(req,res){
    try{
        const {
            instrument_name,
            picture
        } = req.body;

        console.log("this is inst name: " + instrument_name);

        //check if instrument exists
        const existing_instrument = await Instrument.findOne({instrument_name});
        if (existing_instrument) return res.status(406).send("instrument Already Exists");

        new_instrument = new Instrument({
            instrument_name,
            picture
        })

        //save instrument document in db
        const added_instrument = await new_instrument.save();
        return res.send(added_instrument);

    } catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = {
    addGenre,
    addInstrument
  };