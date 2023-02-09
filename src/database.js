const { config } = require("./config/index")
const mongoose = require("mongoose")
const Logger = require("./utils/logger")
const logger = new Logger()
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://MiguelAG:2rX7iTV5lTLtslVu@cluster0.9ejc0ij.mongodb.net/Users", {useNewUrlParser: true})
.then(db => logger.info("Base de Datos mongoDB conectada"))
.catch(err => logger.error(err))