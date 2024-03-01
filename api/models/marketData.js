const mongoose = require("mongoose")

const marketDataSchema = new mongoose.Schema({
    asset: { type: mongoose.Schema.Types.ObjectId, ref: 'Asset', required: true },
    price: { type: Number },
    volume: { type: Number },
    // Add additional fields as needed
});

module.exports = mongoose.model('MarketData', marketDataSchema)