const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Transaction = require("../models/transaction");
const {
  getAllTransactions,
  createTransaction,
  getTransactionById,
  updateTransactionById,
  deleteTransactionById,
} = require("../controllers/transactions");

router.get("/transactions", getAllTransactions);

router.post("/transactions", createTransaction);

router.get("/transactions/:id", getTransactionById);

router.patch("/transactions/:id", updateTransactionById);

router.delete("/transactions/:id", deleteTransactionById);

module.exports = router;
