const { infoService } = require("../services/infoService")
const Logger = require("../utils/logger")
const logger = new Logger()

const info = async (req,res,next)=>{
    const data = await infoService()
    logger.info(JSON.stringify(data))
    res.render("info", {data})
}
module.exports = {info}