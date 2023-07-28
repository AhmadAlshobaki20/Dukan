const Vendor = require("./../models/vendorModel");
const jwt = require("jsonwebtoken");

// generate token

const signing = (id) => {
  return jwt.sign({ id: id }, process.env.PRIVATE_KEY /*secret_key*/);
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
    orders: req.body.orders,
  });
  // create token
  const token = signing(newVendor._id);
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
    console.log(Ven)
    if (!Ven || !correct) {
      return res.status(400).json({
        message: "incorrect password or email",
      });
    }    
    const token = signing(Ven._id);
    // 3)everything ok , send token\
    return res.status(200).json({
      token
    });

  } catch (err) {
    console.log(err)
    res.status(400).json({
      status: "fail",
      data: {
        err,
      },
    });
  }
};
