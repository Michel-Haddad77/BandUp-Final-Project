const { Router } = require('express');
const { getNotifications, addNotification } = require('./controller/notification');

const router = Router();


router.get('/all', getNotifications);
router.post('/add', addNotification);

module.exports = router;