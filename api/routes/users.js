const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const User = require("../models/user");
const {
  signupUser,
  loginUser,
  deleteUserById,
} = require("../controllers/users");

router.post("/signup", signupUser);

router.post("/login", loginUser);

router.delete("/users/:id", deleteUserById);

module.exports = router;
