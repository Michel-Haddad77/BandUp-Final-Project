const { Router } = require('express');
const { getAllMusicians, getRecentMusicians, apply, getByInstrument, getAllInstruments } = require('./controller/musicians');

const router = Router();


router.get('/all', getAllMusicians);
router.get('/recent', getRecentMusicians);
router.post('/apply', apply);
router.get('/byinstrument', getByInstrument);
router.get('/allinstruments', getAllInstruments);

module.exports = router;