const express = require("express")
const router = express.Router()
const {isAuthenticated} = require("../middlewares/isAuthenticated")
const homeControllers = require("../controllers/homeControllers")

router.get("/",isAuthenticated, homeControllers.getProducts )

router.post("/", homeControllers.saveProduct)

router.delete("/",homeControllers.deleteProduct)

module.exports = router 