const mongoose = require("mongoose")

const notificationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, default: 'unread' },
    assets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asset' }]
    // Add additional fields as needed
});

module.exports = mongoose.model('Notification', notificationSchema)