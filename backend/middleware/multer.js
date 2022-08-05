const multer = require('multer');
const fs = require("fs");

//Multer configuration to handle uploaded videos and store them in the uploads folder
//Uploads folder was added to .gitignore
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)//save the file name as the user id sent from frontend
    }
  })
   
const upload = multer({ storage: storage });

module.exports = upload;