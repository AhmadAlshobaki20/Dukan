const Product = require("../models/productsModel");

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    result: products.length,
    status: "success",
    data: {
      products,
    },
  });
};

exports.addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json({
      newProduct,
    });
  } catch (err) {
    console.log(err);
  }
};
