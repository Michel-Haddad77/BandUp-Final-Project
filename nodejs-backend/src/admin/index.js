const { Router } = require('express');
const { addGenre } = require('./controller/admin');

const router = Router();


router.post('/genre', addGenre);


module.exports = router;