const User = require("./User");
const mongoose = require('mongoose');

const Band = User.discriminator('Band', new mongoose.Schema({
    genre:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre'
    },
    requested:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Musician'
    }]
}, { strict: false }));

module.exports = Band;