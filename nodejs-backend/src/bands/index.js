const { Router } = require('express');
const { getAllBands, getRecentBands } = require('./controller/bands');

const router = Router();


router.get('/all', getAllBands);
router.get('/recent', getRecentBands);


module.exports = router;