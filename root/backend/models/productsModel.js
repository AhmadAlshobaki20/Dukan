const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  // imageUrl: { type: string, required: true },
  quantity: { type: Number, required: true, min: 1 },
  // orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
