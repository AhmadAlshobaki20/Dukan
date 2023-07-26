const jwt = require("jsonwebtoken");
const Vendor = require("./../");
const Customer = require("../models/customer");
const bcrypt = require("bcrypt");

//Controller for customer login
exports.customerLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the customer
    const customer = await Customer.findOne({ email });
    const queryString = req.query;
    const query = await Customer.find(queryString);
    // Check if the customer exists and the password is correct

    if (!customer || !(await bcrypt.compare(password, customer.password))) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    console.log(query);
    const token = createToken(customer._id, "customer");
    res.status(200).json({
      status: "success",
      data: {
        query,
      },
      token,
    });
    // Create and send the JWT token in the response
    // res.status(200).json();
  } catch (error) {
    console.error("Error during customer login:", error.message);
    res.status(500).json({ message: "An error occurred during login." });
  }
};

// Controller for vendor login
exports.vendorLogin = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Find the vendor
    const vendor = await Vendor.findOne({ email });
    const queryString = req.query;
    const query = await Vendor.find(queryString);
    console.log(req.query);
    // Check if the vendor exists and the password is correct
    if (!vendor || !(await bcrypt.compare(password, vendor.password))) {
      return res.status(401).json({ message: "Invalid credentials." });
    }
    console.log(req.query);
    // Create and send the JWT token in the response
    const token = createToken(vendor._id, "vendor");
    res.status(200).json({
      status: "success",
      data: {
        query,
      },
      token,
    });
  } catch (error) {
    console.error("Error during vendor login:", error.message);
    res.status(500).json({ message: "An error occurred during login." });
  }
};
