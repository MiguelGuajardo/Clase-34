const express = require("express")
const {engine: exphbs} = require("express-handlebars")
const session = require("express-session")
const {config} = require("./src/config/index")
const cookieParser = require("cookie-parser")
const passport = require("passport")
const auth  = require("./src/routes/authRouter")
const profile = require("./src/routes/profileRouter")
const home = require("./src/routes/homeRouter")
const products = require("./src/routes/productsRouter")
const info = require("./src/routes/infoRouter")
const random = require("./src/routes/randomRouter")
const Error404 = require("./src/routes/404Router")
const MongoStore = require("connect-mongo")
const Logger = require("./src/utils/logger")
const logger = new Logger()
const cluster = require('cluster');
const os = require('os')
const app = express()


require("./src/database")
require("./src/passport/local-auth")

/* Config hbs */
app.engine("hbs", exphbs({extname: ".hbs", defaultLayout: "main.hbs"}))
app.set("view engine", ".hbs")

/* middlewares */
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true }
const sessionConfig ={
    store: MongoStore.create({
        mongoUrl: config.DATABASE.mongo.mongoUrl,
        dbName: config.DATABASE.mongo.mongoDbName,
        mongoOptions:mongoOptions,
        ttl: 60,
        collectionName: config.DATABASE.mongo.mongoCollectionName
    }),
    secret: config.DATABASE.mongo.mongoSecret,
    resave: false,
    saveUninitialized: false,
    rolling:true,
    cookie: {
        maxAge:60000
    }
}
app.use(session(sessionConfig))

/* app.use(session({
    secret: config.DATABASE.mongo.mongoSecret,
    resave: false,
    saveUninitialized:false
})) */
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser("secrett"))

app.use(express.static('./public'))


/* Routes */
app.use("/", auth)
app.use("/", home)
app.use("/products", products)
app.use("/profile", profile)
app.use("/", info)
app.use("/randoms", random)
app.all("*",Error404)

/* Server Listen */

if (config.SERVER.MODE === 'CLUSTER' && cluster.isPrimary) {        
    const numCPUs = os.cpus().length

    logger.info(`CLUSTER corriendo en nodo primario ${process.pid} - Puerto ${config.SERVER.PORT}`)
    
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        logger.warn(`Worker ${worker.process.pid} finalizado`)
        cluster.fork()
    });
        
} else {
    const server = app.listen(config.SERVER.PORT, () => {
        logger.info(`Proceso #${process.pid} escuchando en el puerto ${config.SERVER.PORT}`)
    });
    server.on("error", (error) => console.log(`Error en servidor ${error}`));
}
