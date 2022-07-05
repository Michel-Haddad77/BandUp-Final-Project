const { Router } = require('express');
const { getAllBands } = require('./controller/bands');

const router = Router();


router.get('/all-bands', getAllBands);


module.exports = router;