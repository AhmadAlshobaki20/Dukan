const express = require("express");

const vendorRouter = require("./routers/vendorsRouter");
const inventoryRouter = require("./routers/productsRouter");
const app = express();

// create middleware -> responsible for get the req body data
app.use(express.json());

// mounting process
app.use("/api/v1/vendors", vendorRouter);
app.use("/api/v1/Products", inventoryRouter);

module.exports = app;
