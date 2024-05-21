const express = require("express");
// const changePassword = require("../db/changePassword");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const findUserByUsername = require("../db/findUserByUsername");

const userController = new express.Router();

userController.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  // Compare password with hash
  const isMatch = await bcrypt.compare(password, user.hashed_password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  // Generate JWT token
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
  res.cookie("authorization", token, { maxAge: 900000, httpOnly: true });
});

module.exports = userController;
