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

// Login User
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body; // frontend data
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .send({ success: false, message: "you have to Register at first" });
    }
    const matched = await bcrypt.compare(password, user.password); // proof if password is correct
    if (!matched || !user.confirmed) {
      return res.status(400).send({ message: "invalid email or password" });
    }
    res.status(200).send({ message: "user is login" });
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
});

module.exports = router;
