const Report = require("../models/report");

const getAllReports = async (req, res, next) => {
  try {
    const docs = await Report.find();
    if (docs.length === 0) {
      res.status(404).json({
        message: "Not Any Report Exist",
      });
    } else {
      console.log(docs);
      res.status(302).json({
        message: "Here are All the Reports",
        report: docs,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createReport = async (req, res, next) => {
  try {
    const report = new Report(req.body);
    const doc = await report.save();
    console.log(doc);
    res.status(201).
      json({
        message: "Report Created About User Portfolio",
        report: doc,
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getReportById = async (req, res, next) => {
  try {
    const doc = await Report.findById(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Not found Report",
      });
    } else {
      console.log(doc);
      res.status(302).json({
        message: "Here is Searched Report",
        report: doc,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateReportById = async (req, res, next) => {
  try {
    const result = await Report.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!result) {
      res.status(404).json({
        message: "Not Found Report",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "Report is Updated",
        report: result,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteReportById = async (req, res, next) => {
  try {
    const doc = await Report.findOneAndDelete(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Not Found Report",
      });
    } else {
      console.log(doc);
      res.status(201).json({
        message: "Report Deleted",
        report: doc,
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
  getAllReports,
  createReport,
  getReportById,
  updateReportById,
  deleteReportById,
};
