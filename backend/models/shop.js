const mongoose = require("mongoose");

const itemsSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    gram: { type: String, required: true },
    ingredience: [{ type: String, required: true }],
});

const productsSchema = mongoose.Schema({
    category: { type: String, required: true },
    items: [itemsSchema]
});

const shopSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    products: [productsSchema]
});

module.exports = mongoose.model("Shop", shopSchema);