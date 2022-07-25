const { Router } = require('express');
const { getNotifications, addNotification } = require('./controller/notification');

const router = Router();


router.post('/add', getNotifications);

module.exports = router;