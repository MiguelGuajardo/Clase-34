const express = require("express")
const { random } = require("../controllers/randomControllers")

const router = express.Router()

router.get("/", random)


module.exports = router