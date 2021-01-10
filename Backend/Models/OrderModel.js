const mongoose = require("mongoose");
const OrderSchema = require("../Schemas/OrderSchema");

const OrderModel = mongoose.model("order", OrderSchema);

module.exports = OrderModel;
