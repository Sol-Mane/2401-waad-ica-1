const express = require("express");
// const changePassword = require("../db/changePassword");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const findUserByUsername = require("../db/findUserByUsername");
const addUser = require("../db/addUser");

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

  const token = jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );

  res.json(token);
});

userController.post("/register", async (req, res) => {
  console.log(req.body);

  const { username, password } = req.body;

  try {
    const hashed_password = await bcrypt.hash(password, 10);

    await addUser(username, hashed_password);

    res.send("registered");
  } catch (e) {
    console.error(e);
  }
});

module.exports = userController;
