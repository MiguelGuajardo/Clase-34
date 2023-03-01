const express = require("express")
const router = express.Router()
const productsController = require("../controllers/productsControllers")

router.get("/",isAuthenticated, productsController.getProducts )

router.post("/", productsController.saveProduct)

function isAuthenticated (req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
}

module.exports = router 