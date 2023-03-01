const passport = require("passport")

const login = (req,res,next)=>{
    if(req.session?.user){
        res.render("/")
    }else{
        res.render("login")
    }
}
const loginPassport = passport.authenticate("local-login" ,{
    successRedirect:"/",
    failureRedirect:"/login-error",
    passReqToCallback:true
})
const login_error = (req,res,next)=>{
    res.render('login-error')
}
const register = (req,res,next)=>{
    res.render("register")
}
const registerPassport = passport.authenticate("local-register",{
    successRedirect:"/",
    failureRedirect:"/register-error",
    passReqToCallback:true
})
const register_error = (req,res,next)=>{
    res.render("register-error")
}
const logOut = (req, res, next) => {
    res.redirect('/login');
    req.session.destroy()
}


module.exports = {
    login,
    loginPassport,
    login_error,
    register,
    registerPassport,
    register_error,
    logOut
}