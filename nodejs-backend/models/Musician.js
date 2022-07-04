const User = require("./User");

const Musician = User.discriminator('Musician', new Schema({
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
}, options));

module.exports = Musician;