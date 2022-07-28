const { Router } = require('express');
const { register,login, deleteExpoToken, getUser, updateUser, uploadVideo } = require('./controller/user');
const multer = require('multer');
const fs = require("fs");

const router = Router();

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

router.post('/register', register);
router.post('/login', login);
router.delete('/delete-token', deleteExpoToken);
router.get('/get-one', getUser);
router.put('/update', updateUser);
//multer is used as a middleware
router.post('/upload',upload.single('video') , uploadVideo);

module.exports = router;