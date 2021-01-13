const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config(); //Have to be before route import

const mongoose = require("mongoose");

const userRouter = require("./Routes/user");
const bookingRouter = require("./Routes/booking");
const Order = require("./Models/OrderModel");
const Fields = require("./Models/FieldsModel");

////Middleware

///Use Section
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/booking", bookingRouter);

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

console.log(typeof date);

// void (async function createFields() {
//   const date = new Date();

//   // add a day
//   date.setDate(date.getDate() + 4);
//   const day = +date.toISOString().slice(8, 10);
//   const month = +date.toISOString().slice(5, 7);
//   console.log(day);
//   console.log(month);

//   await Fields.create({
//     date: { day: day, month: month },
//     fields: {
//       1: [
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//       ],
//       2: [
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//       ],
//       3: [
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//       ],
//       4: [
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//         [[], [], [], [], [], [], [], [], [], []],
//       ],
//     },
//   });
//})();
