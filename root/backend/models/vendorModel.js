// import mongoose
const mongoose = require("mongoose");

// create vendors schema
vendorSchema = mongoose.Schema(
  // fname : stands for first name
  {
    fname: {
      type: String,
      // validator
      required: [true, "vendor must have fname"],
    },
    // lname : stands for last name
    lname: {
      type: String,
      // validator
      required: [true, "vendor must have lname"],
    },
    email: {
      type: String,
      // validator
      required: [true, "vendor must have email"],
      unique: true,
    },
    address: {
      type: String,
      // validator
      required: [true, "vendor must have lname"],
    },
    governorate: {
      type: String,
      required: [true, "vendor must have governorate"],
    },
    storeName: {
      type: String,
      required: [true, "vendor must provide store name"],
    },
    Password: {
      type: String,
      required: [true, "vendor must type a password"],
    },
    product:[{ 
        type: mongoose.Schema.ObjectId,
        ref: "Product"
      }
    ],
  }
);

// create model for vendors
// collection is a collection of documents that are created by model
const vendor = mongoose.model("vendor", vendorSchema);

module.exports = vendor;
