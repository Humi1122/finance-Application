const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Report = require("../models/report");
const {
  getAllReports,
  createReport,
  getReportById,
  updateReportById,
  deleteReportById,
} = require("../controllers/reports");

router.get("/reports", getAllReports);

router.post("/reports", createReport);

router.get("/reports/:id", getReportById);

router.patch("/reports/:id", updateReportById);

router.delete("/reports/:id", deleteReportById);

module.exports = router;
