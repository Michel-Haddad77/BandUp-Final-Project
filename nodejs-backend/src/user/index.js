const { Router } = require('express');
const { register,login, deleteExpoToken, getUser, updateUser } = require('./controller/user');

const router = Router();


router.post('/register', register);
router.post('/login', login);
router.delete('/delete-token', deleteExpoToken);
router.get('/get-one', getUser);
router.put('/update', updateUser);

module.exports = router;