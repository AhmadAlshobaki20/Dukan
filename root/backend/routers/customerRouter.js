const express = require("express");
const router = express.Router();
const customerController = require('./../controller/customerController')
const loginController = require('./../controller/loginContoller');
const orderController = require('./../controller/orderController');


//  Customer profile

// other customer routes
router
.route('/')
.get(customerController.getAllCustomer)

router
.route('/:id')
.post(customerController.setOrder)

router
.route('/register')
.post(customerController.customerRegister);
router
.route('/login')
.get(loginController.customerLogin);
router
.route('/logout')
.post(customerController.customerLogout);
router
.route('/:id/profile')
.get(customerController.profileInfo);
router
.route('/order')
.post(orderController.AddOrder)
.get(orderController.getAllOrdersCustomer);
router
.route('/:id/order')
.patch(customerController.updateOrder)

module.exports = router;