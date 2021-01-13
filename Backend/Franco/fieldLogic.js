const dayjs = require("dayjs");

const User = require("./Models/User");
const Booking = require("./Models/Booking");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");

module.exports = {
  findFreeSlots: async (date) => {
    const lowerDateRange = dayjs(date)
      .set("hour", 0)
      .set("minute", 0)
      .set("second", 0);
    const upperDateRange = dayjs(date)
      .set("hour", 23)
      .set("minute", 59)
      .set("second", 59);

    console.log(lowerDateRange.toString(), upperDateRange.toString());

    const bookings = await Booking.find({
      startTime: {
        $gt: lowerDateRange,
        $lte: upperDateRange,
      },
    });

    const slots = bookings.reduce(
      (acc, booking) => {
        const hour = dayjs(booking.startTime).hour();
        const endHour = dayjs(booking.endTime).hour();

        for (let i = hour; i < endHour; i++) {
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
        9: null,
        10: null,
        11: null,
        12: null,
        13: null,
        14: null,
        15: null,
        16: null,
        17: null,
      }
    );

    return slots;
  },
};

// how to find free slots
// how to find total players in a slot
// users can only book a maximum of a whole day
