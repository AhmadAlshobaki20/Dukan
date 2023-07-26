// import vendor model
const vendor = require("./../models/vendorModel");

// create handler function to get all vendors
exports.getAllVendors = async (req, res) => {
  const vendors = await vendor.find();
  try {
    res.status(200).json({
      result: vendors.length,
      status: "success",
      data: {
        vendors,
      },
    });
  } catch (err) {
    console.log("Error🔥", err);
  }
};

exports.createNewVendor = async (req, res) => {
  const newVendor = await vendor.create(req.body);
  try {
    res.status(201).json({
      status: "success",
      data: {
        newVendor,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// handler function to get specific vendor
exports.getVendor = async (req, res) => {
  try {
    const specificVendor = await vendor
      .findById(req.params.id)
      .populate("product");
    res.status(200).json({
      status: "success",
      data: {
        specificVendor,
      },
    });
  } catch (err) {
    console.log("Error🔥", err);
  }
};

exports.updateVendor = async (req, res) => {
  try {
    const updateVendor = await vendor.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).json({
      status: "success",
      data: {
        vendor: updateVendor,
      },
    });
  } catch (err) {
    console.log("UpdateError🔥💣", err);
  }
};

// handler function to delete specific vendor
exports.deleteVendor = async (req, res) => {
  await vendor.findByIdAndDelete(req.params.id);
  res.status(204).json({
    vendor: null,
  });
};
