const mongoose = require("mongoose");
const vendor = require(`./vendorModel`);
// create inventory schema

const productSchema = mongoose.Schema({
  productName: {
    type: String,
  },
  category: {
    type: String,
  },
  Quantity: Number,
  Price:{
    type:Number,
    required:[true, "the product must have a price"]
  }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
