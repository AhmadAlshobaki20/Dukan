const mongoose = require("mongoose");
const validator = require("validator");

const vendorSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail],
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: function (value) {
        return /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value);
      },
      message:
        "Password must be at least 8 characters with uppercase and lowercase letters",
    },
  },
  address: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "order" }],
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
