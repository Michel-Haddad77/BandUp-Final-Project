const { Router } = require('express');
const { getAllBands, getRecentBands, requestToApply, getByGenre, getAllGenres, getNearbyBands } = require('./controller/bands');

const router = Router();


router.get('/all', getAllBands);
router.get('/recent', getRecentBands);
router.post('/requested', requestToApply);
router.get('/bygenre', getByGenre);
router.get('/allgenres', getAllGenres);
router.get('/allgenres', getNearbyBands);


module.exports = router;