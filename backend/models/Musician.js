const User = require("./User");
const mongoose = require('mongoose');

const Musician = User.discriminator('Musician', new mongoose.Schema({
    last_name: {
        type: String,
        required: true,
    },
    instrument:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instrument'
    },
    applied:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Band'
    }]
}, { strict: false }));

module.exports = Musician;