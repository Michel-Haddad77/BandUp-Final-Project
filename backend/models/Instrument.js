const mongoose = require('mongoose');

const instrumentSchema = new mongoose.Schema({
    instrument_name: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      default: "",
    },
}, { strict: false });

module.exports = mongoose.model('Instrument', instrumentSchema);