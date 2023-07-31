const Vendor = require("./../models/vendorModel");
const Customer = require("./../models/customer");
const jwt = require("jsonwebtoken");

// generate token
const signing = (id, key) => {
  return jwt.sign({ id: id }, key /*secret_key*/);
};

// register handler Function
exports.registerVendor = async (req, res) => {
  const newVendor = await Vendor.create({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    products: req.body.products,
    storeName: req.body.storeName,
    orders: req.body.orders,
  });
  // create token
  const token = signing(newVendor._id, process.env.PRIVATE_KEY_VENDOR);
  res.status(201).json({
    status: "success",
    token: token,
    data: {
      vendor: newVendor,
    },
  });
};

// Controller for vendor logout
exports.vendorLogout = (req, res) => {
  res.status(200).json({ message: "Vendor logout successful." });
};

// Controller for vendor login
exports.vendorLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    //1) check email and password if exist
    if (!email || !password) {
      return res.status(400).json({
        message: "please provide password or email",
      });
    }
    //2) check user and password is correct
    const Ven = await Vendor.findOne({ email });
    const correct = await Ven.correctPassword(password, Ven.password);
    console.log(Ven);
    if (!Ven || !correct) {
      return res.status(400).json({
        message: "incorrect password or email",
      });
    }
    const token = signing(Ven._id, process.env.PRIVATE_KEY_VENDOR);
    // 3)everything ok , send token\
    return res.status(200).json({
      token,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        err,
      },
    });
  }
};

//Customers
exports.customerRegister = async (req, res) => {
  const newCustomer = await Customer.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const token = signing(newCustomer._id, process.env.PRIVATE_KEY_CUSTOMER);
  res.status(200).json({
    status: "success",
    token: token,
    data: {
      customer: newCustomer,
    },
  });
};

exports.customerLogin = async () => {
  const { email, password } = req.body;
  //1) check email and password if exist
  if (!email || !password) {
    res.status(400).json({
      message: "provide email or password",
    });
  }
  // 2)check if customer exist
  const customer = await Customer.find({ email });
  if (!customer) {
    res.status(400).json({
      message: "email or password not valid",
    });
  }
  const token = signing(customer._id, process.env.PRIVATE_KEY_CUSTOMER);
  // 3)everything ok , send token\
  return res.status(200).json({
    token,
  });
};
