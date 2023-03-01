const express = require("express")
const { authenticateHome, productPost } = require("../controllers/productsControllers")
const router = express.Router()

router.get("/",isAuthenticated, authenticateHome )

router.post("/", productPost)

function isAuthenticated (req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
}


module.exports = router