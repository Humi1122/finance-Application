const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Notification = require("../models/notification");
const {
  getAllNotifications,
  createNotification,
  getNotificationById,
  updateNotificationById,
  deleteNotificationById,
} = require("../controllers/notifications");

router.get("/notifications", getAllNotifications);

router.post("/notifications", createNotification);

router.get("/notifications/:id", getNotificationById);

router.patch("/notifications/:id", updateNotificationById);

router.delete("/notifications/:id", deleteNotificationById);

module.exports = router;
