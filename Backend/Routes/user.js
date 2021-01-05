const express = require("express");
const router = express.Router();
const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const sendEmail = require("../Utils/SendEmailGrid");

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
    await sendEmail(req.body, "confirm");
    if (registerUser) {
      const token = jwtIssuer(registerUser);
      res
        .status(200)
        .cookie("jwt", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
        })
        .send({ success: true, message: "The User is Registered" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
});
/////Registration confirm
router.get("/confirmation/:email/:password", async (req, res) => {
  try {
    const { email, password } = req.params;
    const result = await bcrypt.compare(
      process.env.CONFIRM_PASSWORD_SECRET,
      password
    );
    console.log(result, email);

    if (!result) {
      throw "Wrong Confirmation Link";
    }

    const user = await User.findOneAndUpdate(
      { email: email },
      { confirmed: true }
    );
    if (!user) {
      throw "With this email is no user registered";
    }

    res.send(`<h1>Registration confirmed, now you can login</h1>`);
  } catch (error) {}
});
///Password Reset  //user/reset
router.post("/reset", async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email: email });
    if (!user) {
      throw "With this email is no user registered";
    }
    console.log(user);

    await sendEmail(req.body, "reset");

    ////

    res.send(`<h1>Reset Link sendet, please check your email</h1>`);
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
});

/////Password reset End
////Password reset confirm

/////
//////////Login
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
    const token = jwtIssuer(user);
    res
      .status(200)
      .cookie("jwt", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      })
      .send({ message: "user is login" });
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
});
/////////////Login End

module.exports = router;
