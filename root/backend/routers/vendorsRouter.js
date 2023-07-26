const express = require("express");
const vendorController = require(`${__dirname}/../controller/vendorController.js`);
const loginController = require('./../controller/loginContoller');
const orderController = require('./../controller/orderController');

const router = express.Router();

router
  .route("/")
  .get(vendorController.getAllVendors)
  .post(vendorController.createNewVendor);

router
  .route("/:id")
  .get(vendorController.getVendor)
  .patch(vendorController.updateVendor)
  .delete(vendorController.deleteVendor);

router.route("/register").post(vendorController.registerVendor);
router.route("/login").get(loginController.vendorLogin);

router
.route('/order')
.post(orderController.AddOrder)
.get(orderController.getAllOrdersVendor);
module.exports = router;
