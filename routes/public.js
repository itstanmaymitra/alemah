const express = require("express");

const publicController = require("../controllers/public");

const router = express.Router();

router.get("/", publicController.getHome);
router.get("/products", publicController.getProducts);

module.exports = router;
