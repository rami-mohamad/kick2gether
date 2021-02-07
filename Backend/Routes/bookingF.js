const express = require("express");
const mongoose = require("mongoose");
////
const passport = require("passport");
const configurePassport = require("../Utils/passport-config.js");
configurePassport(passport);
/////
const router = express.Router();
const SendEmail = require("../Utils/SendEmailGrid");

const User = require("../Models/UserModel");
const Field = require("../Models/FieldModel");
const Booking = require("../Models/BookingModel");
const { findFreeSlots, findFreeSlotsRange } = require("../Utils/fieldLogic");
const dayjs = require("dayjs");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);

//response for all day

router.post("/search/", async function (req, res) {
  console.log(req.body);
  const startTime = new Date(req.body.date);

  console.log(startTime);

  const slots = await findFreeSlots(Number(startTime));

  res.send(slots);
});
router.post(
  "/book",
  passport.authenticate("jwt", {
    session: false,
    failureRedirect: "/registration", // this is to redirect to login if no loggedin user
  }),
  async function (req, res) {
    try {
      console.log(req.user.id);

      const userId = req.user.id; //thats will be from jwt token later
      ///const userId = "5ffecbaeb09b1042094243b3";
      const user = await User.findById(userId);
      console.log(user);
      const pin = Math.floor(100000 + Math.random() * 900000);

      console.log(req.body);
      const {
        field,
        startTime,
        endTime,
        numberOfPersons,
        tshirt,
        shoes,
        towels,
      } = req.body;

      const getFieldId = () => {
        if (field === 1) {
          return "60001b41e894950bec3046ae";
        } else if (field === 2) {
          return "60001b41e894950bec3046af";
        } else if (field === 3) {
          return "60001b41e894950bec3046b0";
        } else if (field === 4) {
          return "60001b41e894950bec3046b1";
        }
      };

      // Start end Time Convert
      const startTimeCorrection = new Date(startTime);
      startTimeCorrection.setHours(startTimeCorrection.getHours() + 1);
      const endTimeCorrection = new Date(endTime);
      endTimeCorrection.setHours(endTimeCorrection.getHours() + 1);

      // console.log(startTimeCorrection, endTimeCorrection);
      if (startTimeCorrection >= endTimeCorrection) {
        throw Error("The start time have to be greater than end time");
      }
      if (numberOfPersons > 10) {
        throw Error("Maximum Number of Persons is 10");
      }

      const booking = {
        user: userId,
        field: getFieldId(),
        startTime: startTimeCorrection,
        endTime: endTimeCorrection,
        numberOfPersons,
        tshirt,
        shoes,
        towels,
        pin,
      };

      console.log(booking);
      ///Cheking availabilty
      const checkAvailability = async () => {
        const slots = await findFreeSlots(Number(booking.startTime));
        //console.log(slots);
        //res.send(slots);
        const startHour = booking.startTime.getHours() - 1;
        const finishHour =
          booking.endTime.getHours() === 0
            ? 23
            : booking.endTime.getHours() - 1;
        const hourRange = finishHour - startHour;
        console.log(startHour, finishHour, hourRange);
        let result = true;

        for (i = startHour; i < finishHour; i++) {
          if (!result) {
            return false;
          }
          if (slots[i] !== null) {
            console.log(slots[i][`field_${field}`]);
            if (slots[i][`field_${field}`] + numberOfPersons > 10) {
              result = false;
            }
          } else {
            console.log("ok");
          }
        }
        return result;
      };
      const result = await checkAvailability();
      if (!result) {
        throw Error(
          "For this Hours and Number of people is no free places, please choose another range"
        );
      }
      /////End checking availability
      console.log(result);

      ////Book field
      const bookingResult = await Booking.create(booking);

      if (bookingResult) {
        res.send({
          success: true,
          message: [
            `The field is booked, booking number is ${bookingResult.id}`,
          ],
        });
        SendEmail(user, "booked", pin);
      } else {
        throw Error("Server error by booking");
      }

      ////End of Book Field
    } catch (error) {
      res.status(400).send({ success: false, message: [error.message] });
    }

    //
    /////////////////////

    //create fake date

    ////
    // const startTime = new Date(`2021-02-19T${20 + 1}:00`);
    // const endTime = new Date(`2021-02-19T${21 + 1}:00`);

    // console.log(startTime, endTime);

    //const endDate = new Date();

    //const slots = await findFreeSlots(Number(startTime));
    //console.log(slots);
    //res.send(slots);

    // await Booking.create({
    //   user: "5ffecbaeb09b1042094243b3",
    //   field: "60001b41e894950bec3046b0",
    //   startTime: startTime,
    //   endTime: endTime,
    //   numberOfPersons: 5,
    // });

    // await Booking.create({
    //   user: "5ffc5ae67395372eb44b2b87",
    //   field: "5ffd5cf35089c212f059da87",
    //   startTime: new Date(2021, 2, 17, 9),
    //   endTime: new Date(2021, 2, 17, 11),
    //   numberOfPersons: 4,
    // });
  }
);
router.post("/delete", async function (req, res) {
  const { bookingId, password } = req.body;

  try {
    const deleteResult = await Booking.findByIdAndDelete(bookingId);
    console.log(deleteResult);

    if (deleteResult) {
      res.send({
        success: true,
        message: [`The booking ${bookingId} is deleted`],
      });
    } else {
      throw Error("This booking is not exist");
    }
  } catch (error) {
    res
      .status(400)
      .send({ success: false, message: ["This booking id is not exist"] });
  }
});

module.exports = router;
// //create fields one time

// Field.create([
//   {
//     name: "Field 1",
//   },
//   { name: "Field 2" },
//   { name: "Field 3" },
//   { name: "Field 4" },
// ]);
// //End create Field
