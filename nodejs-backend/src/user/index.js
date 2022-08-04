const { Router } = require('express');
const { register,login, deleteExpoToken, getUser, updateUser, uploadVideo, deleteVideo } = require('./controller/user');

const router = Router();

const upload = require('../../middleware/multer');

router.post('/register', register);
router.post('/login', login);
router.delete('/delete-token', deleteExpoToken);
router.get('/get-one', getUser);
router.put('/update', updateUser);
//multer is used as a middleware
router.post('/upload',upload.single('video') , uploadVideo);
router.put('/delete-video', deleteVideo);

module.exports = router;