const Asset = require("../models/asset");

const getAllAssets = async (req, res, next) => {
  try {
    const docs = await Asset.find();
    if (docs.length === 0) {
      res.status(404).json({
        message: "No record of Assets",
      });
    } else {
      console.log(docs);
      res.status(302).json({
        message: "Here are All Records of Assets",
        asset: docs,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createAsset = async (req, res, next) => {
  try {
    const asset = new Asset({
      symbol: req.body.symbol,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    });
    const doc = await asset.save();
    console.log(doc);
    res.status(201).json({
      message: "New Asset Add in List",
      asset: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getAssetById = async (req, res, next) => {
  try {
    const doc = await Asset.findById(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Not found Searched Asset by ID",
      });
    } else {
      console.log(doc);
      res.status(302).json({
        message: "Here Is Searched Asset",
        asset: doc,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateAssetById = async (req, res, next) => {
  try {
    const result = await Asset.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          symbol: req.body.symbol,
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
        },
      },
      { new: true }
    );
    if (!result) {
      res.status(404).json({
        message: "Not Found Asset ID",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "Asset Record Updated",
        asset: result,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteAssetById = async (req, res, next) => {
  try {
    const doc = await Asset.findOneAndDelete(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Not found Asset",
      });
    } else {
      console.log(doc);
      res.status(201).json({
        message: "Asset Record Deleted",
        asset: doc,
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
  getAllAssets,
  createAsset,
  getAssetById,
  updateAssetById,
  deleteAssetById,
};
