const { Router } = require('express');
const { getAllBands, getRecentBands, requestToApply } = require('./controller/bands');

const router = Router();


router.get('/all', getAllBands);
router.get('/recent', getRecentBands);
router.post('/requested', requestToApply);


module.exports = router;