const mongoose = require("mongoose");
const { Schema } = mongoose;

// const FieldSchema = new Schema({
//   name: String,
//   hours: {
//     9: [{ type: mongoose.Types.ObjectId, ref: "Order" }],
//   },
// });

const FieldsSchema = new Schema({
  date: { day: Number, month: Number },
  fields: { 1: [[]], 2: [[]], 3: [[]], 4: [[]] },
});

// const FieldsSchema = new Schema({
//   Date: { day: Number, month: Number },
//   fields: { 1: {}, 2: {}, 3: {}, 4: {} },
// });

module.exports = FieldsSchema;
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
//     [],
//     [],
//     [],
//     [],
//     [],
//     [],
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
