const mongoose = require("mongoose");
const FieldSchema = require("../Schemas/FieldSchema");

const FieldModel = mongoose.model("field", FieldSchema);

module.exports = FieldModel;
