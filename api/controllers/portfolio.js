const Portfolio = require("../models/portfolio");

const getAllPortfolios = async (req, res, next) => {
  try {
    const docs = await Portfolio.find();
    if (docs.length === 0) {
      res.status(404).json({
        message: "No portfoilio of user Exist",
      });
    } else {
      console.log(docs);
      res.status(302).json({
        message: "Here is List Of All Portfolio of Users",
        portfolio: docs,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createPortfolio = async (req, res, next) => {
  try {
    const portfolio = new Portfolio(req.body);
    const doc = await portfolio.save();
    console.log(doc);
    res.status(201).json({
      message: "Portfolio Of User Created",
      portfolio: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getPortfolioById = async (req, res, next) => {
  try {
    const doc = await Portfolio.findById(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Not Found User Portfolio",
      });
    } else {
      console.log(doc);
      res.status(302).json({
        message: "Here is Searched Portfolio of User",
        portfolio: doc,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updatePortfolioById = async (req, res, next) => {
  try {
    const result = await Portfolio.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!result) {
      res.status(404).json({
        message: "Not Found Portfoilo",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "Portfolio Is Updated",
        portfolio: result,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deletePortfolioById = async (req, res, next) => {
  try {
    const doc = await Portfolio.findOneAndDelete(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Not Found Portfolio",
      });
    } else {
      console.log(doc);
      res.status(201).json({
        message: "Portfoilo Deleted",
        portfolio: doc,
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
  getAllPortfolios,
  createPortfolio,
  getPortfolioById,
  updatePortfolioById,
  deletePortfolioById,
};
