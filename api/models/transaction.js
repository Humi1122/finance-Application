const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    sourceAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
    destinationAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
    status: { type: String, default: 'pending' },
    assets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asset' }],
    // Add additional fields as needed
});


module.exports = mongoose.model('Transaction', transactionSchema)