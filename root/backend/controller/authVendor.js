const Vendor = require("./../models/vendorModel");

// register handler Function
exports.registerVendor = async (req, res) => {
  const newVendor = await Vendor.create(req.body);
  res.status(201).json({
    status: "success",
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
