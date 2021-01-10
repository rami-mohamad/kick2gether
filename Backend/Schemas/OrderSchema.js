const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "users" },

  date: Date,
  bookedHours: Number,
  numberOfPersons: Number,
  tshirt: [String],
  shoes: [Number],
  towels: Number,
});

module.exports = OrderSchema;
