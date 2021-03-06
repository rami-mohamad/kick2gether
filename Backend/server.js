const express = require("express");
const path = require("path");
const app = express();
//const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config(); //Have to be before route import
const compression = require("compression");
const mongoose = require("mongoose");

const userRouter = require("./Routes/user");
const bookingRouter = require("./Routes/bookingF");
const passport = require("passport");

////Middleware

///Use Section
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"], // this what what make problems with cors blocking, when with credentia
  })
);
app.use(cookieParser());
//compress all response
app.use(compression());
//make security

//app.use(helmet());
//for deploy
/* app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
}); */
///for deploy end
app.use("/user", userRouter);
app.use("/booking", bookingRouter);
app.use(passport.initialize());
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//Mongoose Connection

mongoose.set("useFindAndModify", false);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connection ok");
  })
  .catch((err) => {
    console.log("connection failed", err);
  });

app.listen(process.env.DEV_SERVER_PORT || 4000, () => {
  console.log(`Server started at port ${process.env.DEV_SERVER_PORT}`);
});
