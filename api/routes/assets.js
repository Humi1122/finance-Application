const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Asset = require("../models/asset");
const {
  getAllAssets,
  createAsset,
  getAssetById,
  updateAssetById,
  deleteAssetById,
} = require("../controllers/assets");

router.get("/assets", getAllAssets);

router.post("/assets", createAsset);

router.get("/assets/:id", getAssetById);

router.patch("/assets/:id", updateAssetById);

router.delete("/assets/:id", deleteAssetById);

module.exports = router;
