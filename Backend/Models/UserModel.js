const mongoose = require("mongoose");
const UserSchema = require("../Schemas/UserSchema");

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
