const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signupUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    const doc = await newUser.save();
    console.log(doc);
    res
      .status(201)
      .json({ message: "User registered successfully", newUser: doc });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    // Compare the provided password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ _id: user._id }, `${process.env.JWT_KEY}`, {
      expiresIn: "1h",
    });

    res.status(200).json({ token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    // Find the user by ID and delete it
    const deletedUser = await User.findOneAndDelete(req.params.id);
    if (!deletedUser) {
      res.status(404).json({
        message: "Not found user",
      });
    } else {
      console.log(deletedUser);
      res
        .status(200)
        .json({ message: "User deleted successfully", user: deletedUser });
    }
  } catch (ere) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  signupUser,
  loginUser,
  deleteUserById,
};
