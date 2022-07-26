const { Router } = require('express');
const upload = require('../../index');
const { register,login, deleteExpoToken, getUser, updateUser, uploadVideo } = require('./controller/user');

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.delete('/delete-token', deleteExpoToken);
router.get('/get-one', getUser);
router.put('/update', updateUser);
router.post('/upload',upload.single('video') , uploadVideo);

module.exports = router;