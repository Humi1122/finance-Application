const mongoose = require("mongoose")

const assetSchema = new mongoose.Schema({
    symbol: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    // Add additional fields as needed
});

module.exports = mongoose.model('Asset', assetSchema)