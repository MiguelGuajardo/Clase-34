const express = require("express")
const router = express.Router()
const {isAuthenticated} = require("../middlewares/isAuthenticated")
const productsController = require("../controllers/productsControllers")

router.get("/",isAuthenticated, productsController.getProducts )

router.post("/", productsController.saveProduct)


module.exports = router 