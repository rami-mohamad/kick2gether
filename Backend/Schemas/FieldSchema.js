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
//working from 14-23  9 Working Hours
//Every Hour have 10 max Persons
// const field = [
//   [
//     [
//       {
//         free: false,
//         nickname: "Player63",
//         userId: "5ff4e2fed43df0ff65f84c6d", //For example Ramis ID from user Database, to find later with users model for dashboard and etc..
//         order: "sdgfsfdsfdsfds",
//       },
//     ],
//     [
//       {
//         free: true,
//       },
//     ],
//     [null],
//     [null],
//     [{ free: true }],
//     [{ free: true }],
//     [{ free: true }],
//     [{ free: true }],
//     [{ free: true }],
//     [{ free: true }],
//   ],
//   [],
//   [],
//   [],
//   [],
//   [],
//   [],
//   [],
//   [],
// ];
