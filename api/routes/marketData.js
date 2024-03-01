const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const MarketData = require("../models/marketData");
const {
  getAllMarketData,
  createMarketData,
  getMarketDataById,
  updateMarketDataById,
  deleteMarketDataById,
} = require("../controllers/marketData");

router.get("/marketData", getAllMarketData);

router.post("/marketData", createMarketData);

router.get("/marketData/:id", getMarketDataById);

router.patch("/marketData/:id", updateMarketDataById);

router.delete("/marketData/:id", deleteMarketDataById);

module.exports = router;
