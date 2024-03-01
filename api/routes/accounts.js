const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Account = require("../models/account");
const {
  getAllAccounts,
  createAccount,
  getAccountById,
  updateAccountById,
  deleteAccountById,
} = require("../controllers/accounts");

router.get("/accounts", getAllAccounts);

router.post("/accounts", createAccount);

router.get("/accounts/:id", getAccountById);

router.patch("/accounts/:id", updateAccountById);

router.delete("/accounts/:id", deleteAccountById);

module.exports = router;
