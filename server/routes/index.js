const router = require('express').Router();

const productRoute = require("./products");
const userRoute = require("./user");

router.use("/", [productRoute, userRoute]);

module.exports = router;