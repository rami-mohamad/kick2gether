const mongoose = require("mongoose");

const FieldSchema = new mongoose.Schema({
  name: String,
});

const FieldModel = mongoose.model("fields", FieldSchema);

module.exports = FieldModel;
