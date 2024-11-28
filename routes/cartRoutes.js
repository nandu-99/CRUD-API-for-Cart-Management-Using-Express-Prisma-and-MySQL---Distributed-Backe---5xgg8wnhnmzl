const express = require('express')
const router = express.Router();
const authMiddleware = require("../authMiddleware");
const {addProduct, getProductById, patchProductById, removeProductById} = require("../controllers/cartController")

router.post("/addproduct", authMiddleware, addProduct); 
router.get("/getById/:id", authMiddleware, getProductById);
router.patch("/patch/:id", authMiddleware, patchProductById);
router.delete("/removeProduct/:id", authMiddleware, removeProductById);


module.exports = router;
