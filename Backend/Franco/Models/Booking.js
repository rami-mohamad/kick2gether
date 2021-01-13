const mongoose = require("mongoose");
const dayjs = require("dayjs");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");

const { Schema } = mongoose;

const BookingSchema = new Schema({
  field: { type: mongoose.Types.ObjectId, ref: "field" },
  user: { type: mongoose.Types.ObjectId, ref: "user" },
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
});

const BookingModel = mongoose.model("booking", BookingSchema);

module.exports = BookingModel;
