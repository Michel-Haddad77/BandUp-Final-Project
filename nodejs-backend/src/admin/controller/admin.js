const mongoose = require('mongoose');
const Genre = require('../../../models/Genre');

//login API
async function addGenre(req,res){
    try{
        const {
            genre_name,
            picture
        } = req.body;

        console.log("this is anme:::: " + genre_name)
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

module.exports = {
    addGenre,
  };