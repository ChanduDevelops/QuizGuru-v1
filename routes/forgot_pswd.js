const express = require("express")
const router = express.Router()
const usersModel = require("../models/users")

router.route("/")
    .get((req, res) => {
        res.redirect("forgot_pswd.html")
    })
    .post((req, res) => {
        const bodyData = req.body
        const userEmail = bodyData.email
        const userPassword = bodyData.password

        validateLogin(userEmail, userPassword)
            .then((userData) => {
                if (userData === null) {
                    res.status(404).json({ success: false, msg: "not found", redirect: "/users/login.html" })
                }
                else {
                    bcrypt.hash(userPassword, saltRounds, (err, hash) => {
                        if (err) {
                            console.error("Error", err);
                            return res.status(500).json({ success: false, redirect: "/users/signup.html" })
                        }
                        usersModel.updateOne(
                            { email: userEmail },
                            {
                                $set: { password: hash }
                            }).then(() => {
                                res.status(200).json({ success: true, redirect: "/users/login.html" })
                            }).catch((err) => {
                                console.error("Error", err)
                                res.status(500).json({ success: false, redirect: "/users/signup.html" })
                            })
                    })
                }
            }).catch((err) => {
                console.error("Error", err)
                res.status(500).json({ success: false, redirect: "/users/signup.html" })
            })
    })

module.exports = router