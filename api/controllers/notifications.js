const Notification = require("../models/notification");

const getAllNotifications = async (req, res, next) => {
  try {
    const docs = await Notification.find();
    if (docs.length === 0) {
      res.status(404).json({
        message: "No Notification exist About Asset",
      });
    } else {
      console.log(docs);
      res.status(302).json({
        message: "Here is the List of Notification about Asset",
        notification: docs,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createNotification = async (req, res, next) => {
  try {
    const notification = new Notification(req.body);
    const doc = await notification.save();
    console.log(doc);
    res.status(201).json({
      message: "NotiFication is Created About Asset",
      notification: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getNotificationById = async (req, res, next) => {
  try {
    const doc = await Notification.findById(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Not Found Any Notification",
      });
    } else {
      console.log(doc);
      res.status(302).json({
        message: "This is Searched Notification of Asset",
        notification: doc,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateNotificationById = async (req, res, next) => {
  try {
    const result = await Notification.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!result) {
      res.status(404).json({
        message: "Not Found Notification for Asset Update",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "Notification of Asset Updated",
        notification: result,
      });
    }
  } catch (err) {
    console(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteNotificationById = async (req, res, next) => {
  try {
    const doc = await Notification.findOneAndDelete(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Not Found Notification",
      });
    } else {
      console.log(doc);
      res.status(201).json({
        message: "Notification Deleted",
        notification: doc,
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
  getAllNotifications,
  createNotification,
  getNotificationById,
  updateNotificationById,
  deleteNotificationById,
};
