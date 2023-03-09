const express = require("express")
const router = express.Router()
const multer  = require('multer')
const configMemoryStorage = multer.memoryStorage()
const upload = multer({ storage: configMemoryStorage})
const { profileThumbnailSend } = require("../controllers/profileControllers")
const {profile} = require("../controllers/profileControllers")
const {isAuthenticated} = require("../middlewares/isAuthenticated")

router.get("/", isAuthenticated , profile)

router.post("/", upload.single('avatar'), profileThumbnailSend )

module.exports = router