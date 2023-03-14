const express = require("express")
const router = express.Router()
const productsController = require("../controllers/productsControllers")

router.get("/", productsController.getProducts )

router.get("/:id", productsController.getOneProduct)

router.post("/", productsController.saveProduct)

router.delete("/:id",productsController.deleteProduct)


module.exports = router 