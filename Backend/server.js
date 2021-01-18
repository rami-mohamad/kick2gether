const express = require("express");
const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config(); //Have to be before route import

const mongoose = require("mongoose");

const userRouter = require("./Routes/user");
const bookingRouter = require("./Routes/bookingF");
const passport = require("passport");

const Order = require("./Models/OrderModel");
const Field = require("./Models/FieldModel");

////Middleware

///Use Section
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/user", userRouter);
app.use("/booking", bookingRouter);
app.use(passport.initialize());

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

app.listen(process.env.DEV_SERVER_PORT, () => {
  console.log(`Server started at port ${process.env.DEV_SERVER_PORT}`);
});
