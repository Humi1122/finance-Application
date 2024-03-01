const Transaction = require("../models/transaction");

const getAllTransactions = async(req, res, next) =>{
    try {
        const docs = await Transaction.find();
        if (docs.length === 0) {
          res.status(404).json({
            message: "Not Any Transaction Exist",
          });
        } else {
          console.log(docs);
          res.status(302).json({
            message: "Here are All the Transactions",
            transaction: docs,
          });
        }
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const createTransaction = async(req, res, next) =>{
try{
    const transaction = new Transaction(req.body)
    const doc = await transaction.save();
    console.log(doc);
    res.status(201).json({
        message: "Transaction Created",
        transaction: doc
    })
}catch(err){
    console.log(err);
    res.status(500).json({
        error: err
    })
}
};

const getTransactionById = async(req, res, next) =>{
    try {
        const doc = await Transaction.findById(req.params.id);
        if (!doc) {
          res.status(404).json({
            message: "Not found Transaction",
          });
        } else {
          console.log(doc);
          res.status(302).json({
            message: "Here is Searched Transaction",
            transaction: doc,
          });
        }
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const updateTransactionById = async(req, res, next) =>{
    try {
        const result = await Transaction.findOneAndUpdate(
          { _id: req.params.id },
          { $set: req.body },
          { new: true }
        );
        if (!result) {
          res.status(404).json({
            message: "Not Found Transaction",
          });
        } else {
          console.log(result);
          res.status(201).json({
            message: "Transaction is Updated",
            transaction: result,
          });
        }
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const deleteTransactionById = async(req, res, next) =>{
    try {
        const doc = await Transaction.findOneAndDelete(req.params.id);
        if (!doc) {
          res.status(404).json({
            message: "Not Found Transaction",
          });
        } else {
          console.log(doc);
          res.status(201).json({
            message: "Transaction Deleted",
            transaction: doc,
          });
        }
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

module.exports={
getAllTransactions,
createTransaction,
getTransactionById,
updateTransactionById,
deleteTransactionById,
}