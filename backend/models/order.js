const mongoose = require("mongoose");

const itemsSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    amount: { type: Number, required: true }
});

const clientSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true }
});

const orderSchema = mongoose.Schema({
    client: clientSchema,
    order: [itemsSchema],
    comment: { type: String },
    totalPrice: { type: Number, required: true }
});

module.exports = mongoose.model("Order", orderSchema);