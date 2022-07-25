const mongoose = require('mongoose');
const Notification = require('../../../models/Notification');


//get all notifications of the user
async function getNotifications(req,res){
    try{
        const notifications = await Notification.find({to: req.query.id});
        return res.send(notifications);

    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

async function addNotification(req,res){
    try{
        const {
            to,
            from,
            title,
            message,
            picture,
        } = req.body;

        const notification = new Notification({
            to: new mongoose.Types.ObjectId(to),
            from: new mongoose.Types.ObjectId(from),
            title,
            message,
            picture
        })

        //save instrument document in db
        const added_notification = await notification.save();
        return res.send(added_notification);

    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = {
    getNotifications,
    addNotification,
  };