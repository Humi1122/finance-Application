const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");



const userRoutes = require("./api/routes/users");
const accountRoutes = require("./api/routes/accounts");
const assetRoutes = require("./api/routes/assets");
const marketDataRoutes = require("./api/routes/marketData");
const notificationRoutes = require("./api/routes/notifications");
const portfolioRoutes = require("./api/routes/portfolio");
const reportRoutes = require("./api/routes/reports");
const transactionRoutes = require("./api/routes/transactions");
require("dotenv").config();



//require("dotenv").config();

mongoose.connect("mongodb://127.0.0.1:27017/financeApp");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use("/users", userRoutes);
app.use("/accounts", accountRoutes);
app.use("/assets", assetRoutes);
app.use("/marketData", marketDataRoutes);
app.use("/notifications", notificationRoutes);
app.use("/portfolio", portfolioRoutes);
app.use("/reports", reportRoutes);
app.use("/transactions", transactionRoutes);


app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });


module.exports= app;
