const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config(); //Have to be before route import

const mongoose = require("mongoose");

const userRouter = require("./Routes/user");

const Order = require("./Models/OrderModel");
const Field = require("./Models/FieldModel");

////Middleware

///Use Section
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);

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

void (async function testOrder() {
  await Order.create({
    userId: mongoose.Types.ObjectId("5ff592ee78780653aceea83c"),
    date: new Date().getTime(),
    bookedHours: 3,
    numberOfPersons: 2,
    tshirt: ["M", "M"],
    shoes: [40, 42],
    towels: 2,
  });

  await Field.create({
    name: "asdsad",
  });
})();
