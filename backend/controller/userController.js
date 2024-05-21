const express = require("express");
const changePassword = require("../db/changePassword");

const userController = new express.Router();

// userRouter.post('/login', async (req, res) => {
//   const { username, password } = req.params;

//   // create JWT token

// })

userRouter.post("/change_password", async (req, res) => {
  const { new_password, username } = req.params;

  // is password valid
  // const doesUserHaveRights

  // if it is hash new password
  const hashedPassword = new_password;

  await changePassword(hashedPassword, username);
});
