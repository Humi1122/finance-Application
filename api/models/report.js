const mongoose = require("mongoose")

const reportSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    content: { type: String, required: true },
    assets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asset', required: true }],
    // Add additional fields as needed
});

module.exports =mongoose.model('Report', reportSchema)