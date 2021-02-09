const dayjs = require("dayjs");
const Field = require("../Models/FieldModel");
const User = require("../Models/UserModel");
const Booking = require("../Models/BookingModel");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");

module.exports = {
  //date in miliseconds start  and end
  findFreeSlots: async (date) => {
    const lowerDateRange = dayjs(date) //accdept also strings
      .set("hour", 0)
      .set("minute", 0) //from
      .set("second", 0);
    const upperDateRange = dayjs(date) //accdept also strings
      .set("hour", 23)
      .set("minute", 59) //till
      .set("second", 59);

    console.log(lowerDateRange.toString(), upperDateRange.toString());

    const bookings = await Booking.find({
      startTime: {
        $gt: lowerDateRange,
        $lte: upperDateRange,
      },
    })
      .populate("field")
      .populate("user");
    //console.log(bookings);

    const slots = bookings.reduce(
      (acc, booking) => {
        const hour = dayjs(booking.startTime).hour();
        let endHour = 24;
        if (dayjs(booking.endTime).hour() === 0) {
          endHour = dayjs(booking.endTime).hour() + 1;
        } else {
          endHour = dayjs(booking.endTime).hour();
        }
        // if (endHour === 0) {
        //   endHour = 24;
        // }
        // console.log("Starttime ", hour, "endtime ", endHour);

        for (let i = hour - 1; i < endHour - 1; i++) {
          if (acc[i] === null) {
            acc[i] = {
              booking: [booking],
              //numberOfPersons: booking.numberOfPersons,
            };
          } else {
            acc[i].booking.push(booking);

            //acc[i].numberOfPersons += booking.numberOfPersons;
          }
        }

        return acc;
      },
      {
        14: null,
        15: null,
        16: null,
        17: null,
        18: null,
        19: null,
        20: null,
        21: null,
        22: null,
      }
    );
    //console.log(slots);
    let fillInfo = {};
    for (const [key, value] of Object.entries(slots)) {
      if (value !== null) {
        // console.log(key, value);

        const bookedForHour = async (e) => {
          //console.log(e);
          const oneBooking = await Booking.find()
            .populate("field")
            .populate("user"); //have to be like key in object!!!
          //console.log(oneBooking);
          fillInfo[key] = oneBooking;

          //return oneBooking;
        };
        bookedForHour();
      }
    }
    //console.log(slots);
    let bookedPlaces = {}; //fields and number of persons
    for (const [key, value] of Object.entries(slots)) {
      if (value === null) {
        bookedPlaces = { ...bookedPlaces, [key]: value };
      } else {
        // console.log(value.field.name, value.numberOfPersons);
        let field_1 = 0;
        let field_2 = 0;
        let field_3 = 0;
        let field_4 = 0;
        await value.booking.forEach((element) => {
          console.log(element.field.name, element.numberOfPersons);
          if (element.field.name === "Field 1") {
            field_1 += element.numberOfPersons;
          } else if (element.field.name === "Field 2") {
            field_2 += element.numberOfPersons;
          } else if (element.field.name === "Field 3") {
            field_3 += element.numberOfPersons;
          } else if (element.field.name === "Field 4") {
            field_4 += element.numberOfPersons;
          }
        });
        bookedPlaces = {
          ...bookedPlaces,
          [key]: { field_1, field_2, field_3, field_4 },
        };
      }

      //console.log(`${key}: ${value}`);
    }

    //return slots;
    return bookedPlaces;
  },
  findFreeSlotsRange: async (dateStart, dateFinish) => {
    const lowerDateRange = dayjs(dateStart) //accept also strings
      .set("hour", 0)
      .set("minute", 0) //from
      .set("second", 0);
    const upperDateRange = dayjs(dateFinish); //accept also strings
    console.log(lowerDateRange);

    // .set("hour", 23)
    // .set("minute", 59) //till
    // .set("second", 59);

    console.log(lowerDateRange.toString(), upperDateRange.toString());

    const bookings = await Booking.find({
      startTime: {
        $gt: lowerDateRange,
        $lte: upperDateRange,
      },
    });

    console.log(bookings);

    const slots = bookings.reduce(
      (acc, booking) => {
        const hour = dayjs(booking.startTime).hour();
        const endHour = dayjs(booking.endTime).hour();

        for (let i = hour - 1; i < endHour; i++) {
          if (acc[i] === null) {
            acc[i] = {
              booking: [booking._id],
              numberOfPersons: booking.numberOfPersons,
            };
          } else {
            acc[i].booking.push(booking._id),
              (acc[i].numberOfPersons += booking.numberOfPersons);
          }
        }

        return acc;
      },
      {
        14: null,
        15: null,
        16: null,
        17: null,
        18: null,
        19: null,
        20: null,
        21: null,
        22: null,
      }
    );

    return slots;
  },
};

// how to find free slots
// how to find total players in a slot
// users can only book a maximum of a whole day
// const find = async () => {
//   const one = await Booking.findById("60001d6a8301fb0dd4390fa2");
//   console.log(one);
// };
// find();
