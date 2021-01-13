const mongoose = require("mongoose");

const FieldSchema = new mongoose.Schema({
  name: String,
});

const FieldModel = mongoose.model("field", FieldSchema);

module.exports = FieldModel;
