const { Router } = require('express');
const { getAllMusicians, getRecentMusicians, apply, getByInstrument } = require('./controller/musicians');

const router = Router();


router.get('/all', getAllMusicians);
router.get('/recent', getRecentMusicians);
router.post('/apply', apply);
router.get('/byinstrument', getByInstrument);


module.exports = router;