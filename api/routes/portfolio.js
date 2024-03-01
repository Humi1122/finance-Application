const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Portfolio = require("../models/portfolio");
const {
  getAllPortfolios,
  createPortfolio,
  getPortfolioById,
  deletePortfolioById,
  updatePortfolioById,
} = require("../controllers/portfolio");
const { updateAccountById } = require("../controllers/accounts");

router.get("/portfolio", getAllPortfolios);

router.post("/portfolio", createPortfolio);

router.get("/portfolio/:id", getPortfolioById);

router.patch("/portfolio/:id", updatePortfolioById);

router.delete("/portfolio/:id", deletePortfolioById);

module.exports = router;
