const express = require("express")
const router = express.Router()
const multer  = require('multer')
const configMemoryStorage = multer.memoryStorage()
const upload = multer({ storage: configMemoryStorage})
const { profileThumbnailSend } = require("../controllers/profileControllers")
const {profile} = require("../controllers/profileControllers")
router.get("/", isAuthenticated , profile)

router.post("/", upload.single('avatar'), profileThumbnailSend )

function isAuthenticated (req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
}

module.exports = router