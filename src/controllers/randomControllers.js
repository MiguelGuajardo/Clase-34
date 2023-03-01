const { fork } = require("child_process")
const Logger = require("../utils/logger")
const logger = new Logger()
const random = async (req,res)=>{
    const cant = req.query.cant || 10000
    const subProcess = fork("randomNumbers.js")
    const PORT = parseInt(process.argv[2]) || 8080
    const PROCESSID = process.pid
    subProcess.send(cant)
    logger.info(`port: ${PORT} -> Fyh: ${Date.now()}`)
    subProcess.on("message",(cant)=>{
        res.render("randoms", { data: cant , PORT, PROCESSID})
    })
}
module.exports = {random}