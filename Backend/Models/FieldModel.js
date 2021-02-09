const mongoose = require("mongoose");
const FieldSchema = require("../Schemas/FieldsSchema");

const FieldModel = mongoose.model("fields", FieldSchema);

module.exports = FieldModel;
