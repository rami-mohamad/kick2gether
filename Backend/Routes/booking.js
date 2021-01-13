const express = require("express");
const router = express.Router();
const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const sendEmail = require("../Utils/SendEmailGrid");
const Fields = require("../Models/FieldsModel");
const Order = require("../Models/OrderModel");
// const { body, validationResult } = require("express-validator");
const jwtIssuer = require("../Utils/jwtIssuer");

router.post("/", async (req, res) => {
  console.log(req.body);
  const dayFields = await Fields.findOne(req.body);
  //console.log(dayFields);
  res.send(dayFields);
});
/////     booking/book
router.post("/book", async (req, res) => {
  console.log(req.body);
  const testOrder = req.body;

  //   const testOrder = {
  //     userId: "5ff592ee78780653aceea83c",

  //     date: { day: 13, month: 1 },
  //     field: 1,
  //     bookedHours: { from: 14, to: 20 },
  //     numberOfPersons: 2,
  //     tshirt: ["m", "xl"],
  //     shoes: [40, 45],
  //     towels: 2,
  //   };

  //Check Availability Function

  const proofAvailability = async (order) => {
    const dayFields = await Fields.findOne({ date: testOrder.date });
    if (!dayFields) {
      console.log("This dates are more as 90 days from today");

      return;
    }
    const fromIndex = testOrder.bookedHours.from - 14;
    const toIndex = testOrder.bookedHours.to - 14;
    let freePlaces = 0;
    let checkAvailability = []; //check hours for all persons
    if (testOrder.bookedHours.to > 23 || testOrder.bookedHours.from < 14) {
      console.log(
        "we are working from 14:00 till 23:00,  please choose correct time"
      );
      return;
    }
    for (let i = fromIndex; i < toIndex; i++) {
      //cover hours from booking

      console.log(dayFields.fields[testOrder.field][i]);

      await dayFields.fields[testOrder.field][i].forEach((element) => {
        if (element.length == 0) {
          freePlaces += 1;
        }
      });
      console.log(
        `free places for${testOrder.date} hour ${i + 14} is ${freePlaces}`
      );

      if (freePlaces >= testOrder.numberOfPersons) {
        checkAvailability.push(true);
      } else if (freePlaces < testOrder.numberOfPersons) {
        checkAvailability.push(false);
      }
      freePlaces = 0;

      await checkAvailability.map((e) => {
        if (!e) {
          //if at least one false return
          console.log(
            "This hours is not possible to book, please choose another range"
          );
          throw Error(
            "This hours is not possible to book, please choose another range"
          );
        }
      });
    }
    console.log(checkAvailability);
    //console.log("Booking possible");
    return true;
  };

  const possibleToBook = await proofAvailability(testOrder);
  console.log(`Booking possible is ${possibleToBook}`);

  ////////////End Checking Availability
  ///////////////////
  if (possibleToBook) {
    ///Making Order
    // const makeOrder = await Order.create(testOrder);
    // const orderId = makeOrder.id;

    ///Making order end
    const withBookedfileds = await fillFields(testOrder);
    console.log(withBookedfileds.id);
    //////Upload to database start
    await Fields.findByIdAndUpdate(withBookedfileds.id, {
      fields: withBookedfileds.fields,
    });
    //////Upload to database end
  }
  ////////////////////

  //////////////Filling Fileds
  async function fillFields(order) {
    const makeOrder = await Order.create(testOrder);
    const orderId = makeOrder.id;
    const dayFields = await Fields.findOne({ date: testOrder.date });

    const fromIndex = testOrder.bookedHours.from - 14;
    const toIndex = testOrder.bookedHours.to - 14;

    for (let i = fromIndex; i < toIndex; i++) {
      //cover hours from booking

      console.log(dayFields.fields[testOrder.field][i]);
      let persons = testOrder.numberOfPersons;
      await dayFields.fields[testOrder.field][i].forEach((element) => {
        if ((element.length == 0) & (persons > 0)) {
          element.push({ userId: testOrder.userId, bookingId: orderId });
          persons -= 1;
        } else if (persons == 0) {
          return;
        }
      });
    }
    res.send({
      success: true,
      message: `The field is booked, booking number is ${orderId}`,
    });
    return dayFields;
  }

  //res.send(withBookedfileds.fields);
});
/////Booking book end

//////Cancel Bookings
router.post("/cancel", async (req, res) => {
  const bookingId = req.body.bookingId;
  const booking = await Order.findById(bookingId);
  console.log(booking.id);
  const replaceField1 = await Fields.findOne({ date: booking.date });
  //   console.log(replaceField.fields[booking.field]);
  //const replaceField = JSON.parse(replaceField1);
  //   console.log(replaceField1.fields[1][1][1][0].bookingId);
  const afterDelete = await replaceField1.fields[1].map((elem) => {
    elem.map((personInHour) => {
      console.log(personInHour);

      if (personInHour.length === 1) {
        if (personInHour.bookingId === bookingId) {
          console.log(personInHour);
        }
      }
    });
  });

  res.send(afterDelete);
  //   await replaceField.fields[booking.field].forEach((element) => {
  //     element;
  //     // if (element.bookingId == bookingId) {
  //     //   console.log(element);
  //     // }
  //   });

  //res.send(replaceField.fields[booking.field]);
});

/////End of cancel delete Bookings

module.exports = router;
