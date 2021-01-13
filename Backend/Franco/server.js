const express = require("express");
const mongoose = require("mongoose");

const User = require("./Models/User");
const Field = require("./Models/Field");
const Booking = require("./Models/Booking");

const { findFreeSlots } = require("./fieldLogic");

const dayjs = require("dayjs");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);

const app = express();

mongoose
  .connect(
    `mongodb+srv://dci-franco:v1IWgZm4br6Rh8YE@cluster0.fczes.mongodb.net/footie?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connection established");
  })
  .catch((error) => {
    console.log("Database connection error", error);
  });

app.get("/booking/search/:startTime/", async function (req, res) {
  const { startTime } = req.params;

  console.log(startTime);

  const slots = await findFreeSlots(Number(startTime));

  res.send(slots);
});

void (async function () {
  // User.create({
  //   name: "Franco",
  //   email: "franco@franco.com",
  //   password: "f",
  //   confirmed: true,
  // });
  // 5ffc5ae67395372eb44b2b87
  // await Field.create([
  //   {
  //     name: "Field 1",
  //   },
  //   { name: "Field 2" },
  //   { name: "Field 3" },
  //   { name: "Field 4" },
  // ]);
  try {
    await Booking.create({
      user: "5ffc5ae67395372eb44b2b87",
      field: "5ffd5cf35089c212f059da87",
      startTime: new Date(2021, 2, 17, 9),
      endTime: new Date(2021, 2, 17, 11),
      numberOfPersons: 4,
    });

    await Booking.create({
      user: "5ffc5ae67395372eb44b2b88",
      field: "5ffd5cf35089c212f059da87",
      startTime: new Date(2021, 2, 17, 9),
      endTime: new Date(2021, 2, 17, 11),
      numberOfPersons: 4,
    });
    //
    // await Booking.create({
    //   user: "5ffc5ae67395372eb44b2b89",
    //   field: "5ffd5cf35089c212f059da87",
    //   startTime: new Date(2021, 2, 17, 13),
    //   endTime: new Date(2021, 2, 17, 14),
    //   numberOfPersons: 4,
    // });
    //
    // await Booking.create({
    //   user: "5ffc5ae67395372eb44b2b99",
    //   field: "5ffd5cf35089c212f059da87",
    //   startTime: new Date(2021, 2, 18, 13),
    //   endTime: new Date(2021, 2, 18, 14),
    //   numberOfPersons: 4,
    // });
  } catch (error) {
    console.log(error);
  }
})();

app.listen(2021, () => {
  console.log(`Example app listening at http://localhost:2021`);
});
