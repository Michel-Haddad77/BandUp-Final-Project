const { Router } = require('express');
const { getAllMusicians, getRecentMusicians, apply, getByInstrument, getAllInstruments, getNearbyMusicians } = require('./controller/musicians');

const router = Router();


router.get('/all', getAllMusicians);
router.get('/recent', getRecentMusicians);
router.post('/apply', apply);
router.get('/byinstrument', getByInstrument);
router.get('/allinstruments', getAllInstruments);
router.get('/nearby', getNearbyMusicians);

module.exports = router;