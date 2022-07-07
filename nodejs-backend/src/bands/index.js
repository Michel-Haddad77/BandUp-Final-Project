const { Router } = require('express');
const { getAllBands, getRecentBands, requestToApply, getByGenre } = require('./controller/bands');

const router = Router();


router.get('/all', getAllBands);
router.get('/recent', getRecentBands);
router.post('/requested', requestToApply);
router.get('/bygenre', getByGenre);


module.exports = router;