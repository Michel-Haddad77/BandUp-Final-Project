const { Router } = require('express');
const adminMiddleware = require('../../middleware/admin');
const { addGenre, addInstrument, deleteUser } = require('./controller/admin');

const router = Router();


router.post('/genre', adminMiddleware(), addGenre);
router.post('/instrument', adminMiddleware(), addInstrument);
router.delete('/user', adminMiddleware(), deleteUser);


module.exports = router;