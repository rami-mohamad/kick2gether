const express = require("express");
const router = express.Router();
const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");

const jwtIssuer = require("../Utils/jwtIssuer");

router.get("/", (req, res) => {
  res.send("Inside user route");
});

////Register
/// Access Public
/// Email and password required minimum
router.post("/register", async (req, res) => {
  console.log(req.body);

  const { name, password, email, nickName } = req.body; //That what we need from frontend
  try {
    if (!email) {
      throw "No Email received from Frontend";
    }
    const user = await User.findOne({ email: email }); //Proof if Email already in use
    if (user) {
      throw "This email is already in use";
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const registerUser = await User.create({
      //If Fails goes to catch
      name: name,
      email: email,
      password: hashedPassword,
    });
    console.log(registerUser);
    if (registerUser) {
      res
        .status(200)
        .send({ success: true, message: "The User is Registered" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
});

module.exports = router;
