const mongoose = require("mongoose");
const FieldsSchema = require("../Schemas/FieldsSchema");

const FieldsModel = mongoose.model("field", FieldsSchema);

module.exports = FieldsModel;
