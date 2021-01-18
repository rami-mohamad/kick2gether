const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true }, //unique is make warning
  password: { type: String, required: true },
  nickname: {
    type: String,
    required: false,
    default: `Player${Math.floor(Math.random() * 100) + 1}`,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

module.exports = UserSchema;
//max test comment
