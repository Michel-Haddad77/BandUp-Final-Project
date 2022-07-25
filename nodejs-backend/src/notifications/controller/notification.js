const mongoose = require('mongoose');
const Notification = require('../../../models/Notification');


//get all notifications of the user
async function getNotifications(req,res){
    try{
        const notifications = await Notification.find(req.query.id);
        return res.send(notifications);

    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}


module.exports = {
    getNotifications,
  };