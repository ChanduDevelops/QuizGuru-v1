const express = require("express")
const bodyParser = require('body-parser')
const session = require("express-session")
const router = express.Router()


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}))


const adminRouter = require("./admin")
router.use("/admin", adminRouter)

const mainRouter = require("./main")
router.use("/main", mainRouter)

const qsnsRouter = require("./qsns")
router.use("/qsns", qsnsRouter)

const reportRouter = require("./report")
router.use("/report", reportRouter)

const loginRouter = require("./login")
router.use("/login", loginRouter)

const signupRouter = require("./signup")
router.use("/signup", signupRouter)

const forgot_pswdRouter = require("./forgot_pswd")
router.use("/forgot_pswd", forgot_pswdRouter)

const contactUsRouter = require("./contact_us")
router.use("/contactus", contactUsRouter)


router.use(express.static("public"));

module.exports = router
