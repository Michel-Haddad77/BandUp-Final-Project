const { Router } = require('express');
const { register,login, deleteExpoToken } = require('./controller/user');

const router = Router();


router.post('/register', register);
router.post('/login', login);
router.delete('/delete-token', deleteExpoToken);

module.exports = router;