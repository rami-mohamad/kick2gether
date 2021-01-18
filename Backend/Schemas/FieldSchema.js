const mongoose = require("mongoose");
const { Schema } = mongoose;

const FieldSchema = new Schema({
  name: String,
  hours: {
    9: [{ type: mongoose.Types.ObjectId, ref: "Order" }],
    10: [{ type: mongoose.Types.ObjectId, ref: "Order" }],
    11: [{ type: mongoose.Types.ObjectId, ref: "Order" }],
    12: [{ type: mongoose.Types.ObjectId, ref: "Order" }],
    13: [{ type: mongoose.Types.ObjectId, ref: "Order" }],
    14: [{ type: mongoose.Types.ObjectId, ref: "Order" }],
    15: [{ type: mongoose.Types.ObjectId, ref: "Order" }],
    16: [{ type: mongoose.Types.ObjectId, ref: "Order" }],
    17: [{ type: mongoose.Types.ObjectId, ref: "Order" }],
  },
});

module.exports = FieldSchema;
