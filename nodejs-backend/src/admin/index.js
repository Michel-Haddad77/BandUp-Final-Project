const { Router } = require('express');
const { addGenre, addInstrument } = require('./controller/admin');

const router = Router();


router.post('/genre', addGenre);
router.post('/instrument', addInstrument);


module.exports = router;