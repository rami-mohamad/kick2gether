const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "users" },

  date: { day: Number, month: Number },
  bookedHours: { from: Number, to: Number },
  numberOfPersons: Number,
  tshirt: [String],
  shoes: [Number],
  towels: Number,
  field: Number,
});

module.exports = OrderSchema;
