const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  lat: {
    type: String,
    default: "",
    min: 6,
    max: 255,
  },
  long: {
    type: String,
    default: "",
    min: 6,
    max: 255,
  },
  picture: {
    type: String,
    default: "",
  },
  video: {
    type: String,
  },
  user_type:{
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
},  { strict: false });


module.exports = mongoose.model('User', userSchema);