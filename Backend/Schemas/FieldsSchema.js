const mongoose = require("mongoose");
const { Schema } = mongoose;

const FieldSchema = new Schema({
  name: String,
});

module.exports = FieldSchema;
