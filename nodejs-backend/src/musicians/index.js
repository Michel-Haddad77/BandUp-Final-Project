const { Router } = require('express');
const { getAllMusicians, getRecentMusicians, apply } = require('./controller/musicians');

const router = Router();


router.get('/all', getAllMusicians);
router.get('/recent', getRecentMusicians);
router.post('/apply', apply);


module.exports = router;