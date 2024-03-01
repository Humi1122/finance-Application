const mongoose = require("mongoose")

const accountSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    accountType: { type: String,enum: ["Liabilities", "Assets", "Equity","Revenue"] ,required: true },
    accountNumber: { type: String, required: true, unique: true },
    balance: { type: Number, default: 0 },
    currency: { type: String,enum: ["GBP", "EUR", "USD"] ,required: true },
    // Add additional fields as needed
});


module.exports = mongoose.model('Account', accountSchema)