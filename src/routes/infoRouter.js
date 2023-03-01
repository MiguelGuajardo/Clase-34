const express = require("express")
const compression = require("compression")
const { info } = require("../controllers/infoControllers")

const router = express.Router()

router.get("/info", info)
router.get("/infoZip",compression(), info)

module.exports = router