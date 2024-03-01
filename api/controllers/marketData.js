const MarketData = require("../models/marketData");

const getAllMarketData = async (req, res, next) => {
  try {
    const docs = await MarketData.find();
    if (docs.length === 0) {
      res.status(404).json({
        message: "NO MarketData Exist About Assets In DB",
      });
    } else {
      console.log(docs);
      res.status(302).json({
        message: "Here is the List of MarketData About all Assets",
        marketData: docs,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createMarketData = async (req, res, next) => {
  try {
    const marketData = new MarketData(req.body);
    const doc = await marketData.save();
    console.log(doc);
    res.status(201).json({
      message: "MarketData about Asset Created",
      marketData: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getMarketDataById = async (req, res, next) => {
  try {
    const doc = await MarketData.findById(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Not Found Any MarketData",
      });
    } else {
      console.log(doc);
      res.status(302).json({
        message: "This is Searched MarketData of Asset",
        marketData: doc,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateMarketDataById = async (req, res, next) => {
  try {
    const result = await MarketData.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!result) {
      res.status(404).json({
        message: "Not Found MarketData for Update",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "MarketData of Asset Updated",
        marketData: result,
      });
    }
  } catch (err) {
    console(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteMarketDataById = async (req, res, next) => {
  try {
    const doc = await MarketData.findOneAndDelete(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Not Found MarketData",
      });
    } else {
      console.log(doc);
      res.status(201).json({
        message: "MarketData Deleted",
        marketData: doc,
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
  getAllMarketData,
  createMarketData,
  getMarketDataById,
  updateMarketDataById,
  deleteMarketDataById,
};
