const express = require("express");
const router = express.Router();
const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const sendEmail = require("../Utils/SendEmailGrid");
const { body, validationResult, check } = require("express-validator");
const jwtIssuer = require("../Utils/jwtIssuer");
const passport = require("passport");
const configurePassport = require("../Utils/passport-config.js");
const { update } = require("../Models/UserModel");
const { Error } = require("mongoose");
configurePassport(passport);
router.get("/", (req, res) => {
  res.send("Inside user route");
});

////Validator Start
const expressValidatorSettings = [
  body("email").normalizeEmail(),
  body(["password", "nickName", "email"]).trim(),
  //body("nickName").isAlphanumeric(),
  body("password")
    .isLength({ min: 8 })
    .withMessage("The password must be at least 8 characters long"),
  body("email").isEmail().withMessage("Please write correct email address"),
];
const passwordValidatorSetting = [
  body(["oldPassword", "newPassword", "repeatedPassword"]).trim(),
  body("newPassword")
    .isLength({ min: 8 })
    .withMessage("The password must be at least 8 characters long")
    .trim(),
];

////Validator End

////Register
/// Access Public
/// Email and password required minimum
router.post("/register", expressValidatorSettings, async (req, res) => {
  console.log(req.body);

  //Validaion Result

  const result = validationResult(req);
  console.log(result);

  if (result.errors.length > 0) {
    const response = result.errors.map((item) => {
      return `${item.msg}`;
    });

    console.log(response);
    const response2 = {
      success: false,
      message: response,
    };
    res.status(400).send(response2);
    return;
  }

  ///Validation Result End

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
      nickName: nickName,
    });
    console.log(registerUser);
    await sendEmail(req.body, "confirm");

    if (registerUser) {
      const token = jwtIssuer(registerUser);
      res
        .status(200)
        .send({ success: true, message: ["The User is Registered"] });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: [error] });
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
    const user = await User.findOne({ email });
    if (!user) {
      throw "With this email is no user registered";
    }
    console.log(user);

    await sendEmail(req.body, "reset");

    ////

    res.send(`<h1>Reset Link sendet, please check your email</h1>`);
  } catch (error) {
    res.status(500).send({ success: false, message: [error] });
  }
});

/////Password reset End
//// reset password link
// router.get("/reset/:email/:pass", async (req, res) => {
//   const hashedConfirmPassword = await bcrypt.hash(
//     process.env.CONFIRM_PASSWORD_SECRET,
//     10
//   );
//   const { email, pass } = req.params;
//   // res.send({ email, pass });
//   //res.send({ hashedConfirmPassword, pass });
//   const isMatch = await bcrypt.compare(
//     process.env.CONFIRM_PASSWORD_SECRET,
//     pass
//   );
//   if (!isMatch) {
//     return res.send("sever error");
//   }
//   if (isMatch) {
//     return res.send("you can reset ");
//   }
//   // if (hashedConfirmPassword === pass) {
//   //   const user = await User.findOne({ email });
//   //   if (!user) {
//   //     return res.send("sever error");
//   //   }
//   //   res.send("you can change the password");
//   // }
// });
// });
//// reset password link end
////Password reset confirm
/////
//////////Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body; // frontend data
    console.log(req.body);
    const user = await User.findOne({ email });
    if (!user) {
      console.log("you have to Register at first");
      return res
        .status(400)
        .send({ success: false, message: ["you have to Register at first"] });
    }

    const matched = await bcrypt.compare(password, user.password); // proof if password is correct
    if (!matched || !user.confirmed) {
      return res
        .status(400)
        .json(
          !user.confirmed
            ? { message: ["not confirmed email"] }
            : { message: ["invalid email or password"] }
        );
    }
    const token = jwtIssuer(user);
    console.log(token);
    res
      .status(200)
      .cookie("jwt", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      })
      .send({ success: true, message: ["user is login"] });
  } catch (error) {
    console.log("error 123 ", error);
    res.status(500).send({ success: false, message: [error] });
  }
});
/////////////Login End

/////////// Dashboard
router.get(
  "/dashboard",
  passport.authenticate("jwt", {
    session: false,
    failureRedirect: "/registration", // this is to redirect to login if no loggedin user
  }),
  (req, res) => {
    console.log("hallo", req.user);
    // res.send("hallo", req.user._id);
  }
);
////////// Dashboard End
///////// dashboard edit
///////// allow edite with confirm password
router.put(
  "/editDashboard",
  [body(["name", "nickname"]).trim().isAlpha()],
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { name, nickname, password } = req.body;
      const result = validationResult(req);
      const userDatabase = await User.findById(req.user._id);
      const matched = await bcrypt.compare(password, userDatabase.password);
      // console.log(matched);
      if (!matched) {
        throw Error;
      }
      if (matched) {
        userDatabase.name = name;
        userDatabase.nickname = nickname;
        userDatabase.save();
        res.status(200).send({ message: ["dashboard updated successfuly!!!"] });
      }

      if (!userDatabase) {
        return res.status(404).send({ message: ["server is error!!!"] });
      }
      if (result.errors.length > 0) {
        return res.status(404).send(result.errors);
      }
      res.status(200).send(userDatabase);
    } catch (e) {
      console.log(e);
      res.status(404).send({ message: ["password not correct!!"] }); /// we have to conver object
    }
  }
);
router.put(
  "/updatePassword",
  passwordValidatorSetting,
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { oldPassword, newPassword, repeatedPassword } = req.body;
    const result = validationResult(req);
    console.log(result);

    const user = await User.findById(req.user._id);
    const matched = await bcrypt.compare(oldPassword, user.password);
    if (!matched) {
      return res.status(400).send({ message: ["invalid password"] });
    } else if (newPassword !== repeatedPassword) {
      return res.status(400).send({ message: ["new password not matched"] });
    } else if (
      matched &&
      result.errors.length === 0 &&
      newPassword === repeatedPassword
    ) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      user.save();
      return res.status(200).send({ message: ["password user is updated!!!"] });
    } else if (result.errors.length > 0) {
      const response = result.errors.map((item) => {
        return `${item.msg}`;
      });
      res.send(response);
    }
  }
);
router.delete(
  "/me",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { password } = req.body;
      const user = await User.findById(req.user._id);
      const matched = await bcrypt.compare(password, user.password);
      if (!matched) {
        return res.send({ message: ["invalid password!!!!"] });
      }
      await user.remove();
      res.send({ message: ["user is deleted"] });
    } catch (e) {
      res.status(500).send({ message: ["server Error!!!"] });
    }
  }
);
//////// dashboard edit ende
/// logut
router.get("/logout", (req, res) => {
  // req.logout(); in frontend should write the function logout
  res.clearCookie("jwt").redirect("/login");
});

////Access Public
///
router.post("/contact", async (req, res) => {
  try {
    const contact = await sendEmail(req.body, "contact");
    res.send({ success: true, message: ["contact request sendet"] });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: ["contact request is not sendet due to server error"],
    });
  }
});
////End of Contact request

module.exports = router;
