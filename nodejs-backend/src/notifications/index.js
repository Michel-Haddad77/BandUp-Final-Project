const { Router } = require('express');
const { addNotification } = require('./controller/notification');

const router = Router();


router.post('/add', addNotification);


module.exports = router;