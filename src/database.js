const { config } = require("./config/index")
const mongoose = require("mongoose")
const Logger = require(".//utils/logger")
const logger = new Logger()
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
.then(db => logger.info("Base de Datos mongoDB conectada"))
.catch(err => logger.error(err))