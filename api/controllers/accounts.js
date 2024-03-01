const Account = require("../models/account");

const getAllAccounts = async (req, res, next) => {
  try {
    const docs = await Account.find();
    if (!docs.length === 0) {
      res.status(404).json({
        message: "No Account Exist",
      });
    } else {
      console.log(docs);
      res.status(302).json({
        message: "Here are All Account detail",
        account: docs,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createAccount = async (req, res, next) => {
  try {
    const account = new Account(req.body);
    const doc = await account.save();
    console.log(doc);
    res.status(201).json({
      message: "New Account Open",
      account: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getAccountById = async (req, res, next) => {
  try {
    const doc = await Account.findById(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Account Not Exist",
      });
    } else {
      console.log(doc);
      res.status(302).json({
        message: "Here Is Searched Account",
        account: doc,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateAccountById = async (req, res, next) => {
  try {
    const result = await Account.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!result) {
      res.status(404).json({
        message: "Account Not Found",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "Account Updated",
        account: result,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteAccountById = async (req, res, next) => {
  try {
    const doc = await Account.findOneAndDelete(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Account Not Found",
      });
    } else {
      console.log(doc);
      res.status(201).json({
        message: "Account Deleted",
        account: doc,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  getAllAccounts,
  createAccount,
  getAccountById,
  updateAccountById,
  deleteAccountById,
};
