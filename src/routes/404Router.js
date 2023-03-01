const express = require("express")
const router = express.Router()
const Logger = require("../utils/logger")
const logger = new Logger()
router.all("*", (req,res)=>{
    const {method, url} = req
    logger.warn(`Ruta ${method} ${url} no implementada`)
    res.render("404")
})

module.exports = router