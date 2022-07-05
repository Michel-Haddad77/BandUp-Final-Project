const User = require("./User");
const mongoose = require('mongoose');

const Musician = User.discriminator('Musician', new mongoose.Schema({
    last_name: {
        type: String,
        required: true,
    },
    instruments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instrument'
    }],
    applied:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Band'
    }]
}));

module.exports = Musician;