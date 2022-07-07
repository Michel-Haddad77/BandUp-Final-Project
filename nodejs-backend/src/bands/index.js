const { Router } = require('express');
const { getAllBands, getRecentBands, requestToApply, getByGenre, getAllGenres } = require('./controller/bands');

const router = Router();


router.get('/all', getAllBands);
router.get('/recent', getRecentBands);
router.post('/requested', requestToApply);
router.get('/bygenre', getByGenre);
router.get('/allgenres', getAllGenres);


module.exports = router;