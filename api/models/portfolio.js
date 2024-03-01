const mongoose = require("mongoose")

const portfolioSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    assets: [{
        asset: { type: mongoose.Schema.Types.ObjectId, ref: 'Asset' },
        quantity: { type: Number, required: true },
        // Add additional fields as needed
    }],
    // Add additional fields as needed
});


module.exports = mongoose.model('Portfolio', portfolioSchema)