const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile:{
    type: String,
    min: 8,
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
  location:{
    lat: {
      type: Number,
      default: null,
      min: 6,
      max: 255,
    },
    long: {
      type: Number,
      default: null,
      min: 6,
      max: 255,
    },
    name: {
      type: String,
      default: "",
      min: 6,
      max: 255,
    }
  },
  picture: {
    type: String,
    default: "",
  },
  video: {
    type: String,
    default: "",
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