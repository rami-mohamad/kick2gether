const mongoose = require("mongoose");
const dayjs = require("dayjs");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");

const { Schema } = mongoose;

const BookingSchema = new Schema({
  field: { type: mongoose.Types.ObjectId, ref: "fields" },
  user: { type: mongoose.Types.ObjectId, ref: "users" },
  startTime: {
    type: Date,
    validate: {
      validator: (date) => {
        const limit = dayjs().add(90, "days");
        return dayjs(date).isSameOrBefore(limit);
      },
      message: "Error: Date too far ahead",
    },
  },
  endTime: { type: Date },
  numberOfPersons: Number,
  tshirt: [String],
  shoes: [Number],
  towels: Number,
  pin: Number,
});

const BookingModel = mongoose.model("booking", BookingSchema);

module.exports = BookingModel;
