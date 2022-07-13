const { Router } = require('express');
const { addGenre, addInstrument, deleteUser } = require('./controller/admin');

const router = Router();


router.post('/genre', addGenre);
router.post('/instrument', addInstrument);
router.delete('/user', deleteUser);


module.exports = router;