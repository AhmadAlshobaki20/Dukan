const mongoose = require("mongoose");
const validator = require("validator");

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
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
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
