const express = require("express")
const router = express.Router()

const auth = require("../controllers/authControllers")

router.get("/login",auth.login)

router.post("/login", auth.loginPassport)

router.get("/login-error",auth.login_error)

router.get("/register",auth.register)

router.post("/register", auth.registerPassport)

router.get("/register-error", auth.register_error)

router.get('/logout', auth.logOut)


module.exports = router