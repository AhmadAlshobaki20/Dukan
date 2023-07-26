const express = require("express");
const Controller = require(`${__dirname}/../controller/vendorController.js`);
const router = express.Router();
router
  .route("/")
  .get(Controller.getAllVendors)
  .post(Controller.createNewVendor);

router
  .route("/:id")
  .get(Controller.getVendor)
  .patch(Controller.updateVendor)
  .delete(Controller.deleteVendor);

module.exports = router;
