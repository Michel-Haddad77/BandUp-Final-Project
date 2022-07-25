const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        default: "",
    },
    message:{
        type: String,
        default: "",
    }
}, { strict: false });

module.exports = mongoose.model('Notification', notificationSchema);