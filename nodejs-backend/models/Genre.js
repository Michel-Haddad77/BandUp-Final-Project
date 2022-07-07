const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    genre_name: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      default: "",
    },
}, { strict: false });

module.exports = mongoose.model('Genre', genreSchema);