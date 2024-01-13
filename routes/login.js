const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const usersModel = require("../models/users")
const adminMail = "admin@gmail.com"

// login validation
const validateLogin = (userEmail, userPassword) => {
    return usersModel
        .find({ email: userEmail })
        .then(result => {
            if (result && result.length > 0) {
                return result[0];
            } else {
                return null;
            }
        })
        .catch(e => {
            console.error(e)
            throw e
        });
}

router.route("/")
    .get((req, res) => {
        res.redirect("login.html")
    })
    .post((req, res) => {
        var isValidated = false
        var isUserAdmin = false
        const bodyData = req.body
        const userEmail = bodyData.email;
        const userPassword = bodyData.password;
        validateLogin(userEmail, userPassword)
            .then((userData) => {
                if (userData === null) {
                    res.status(404).json({ success: false, msg: "not exists", redirect: "/users/login.html" })
                } else {
                    bcrypt.compare(userPassword, userData.password, (err, result) => {
                        if (err) {
                            res.status(500).json({ success: false, redirect: "/users/login.html" })
                        }
                        else if (result && userEmail === adminMail) {
                            isValidated = true
                            isUserAdmin = true
                            req.session.user = userEmail

                            // res.redirect(`/users/main?user=${userEmail}&validated=${validated}&isUserAdmin=${isUserAdmin}`)
                            res.status(200).json({ success: true, redirect: "/users/admin.html" })
                            console.log(`user : ${userEmail}`)
                        }
                        else if (result) {
                            isValidated = true
                            req.session.user = userEmail

                            // res.redirect(`/users/main?user=${userEmail}&validated=${validated}&isUserAdmin=${isUserAdmin}`)
                            res.status(200).json({ success: true, redirect: "/users/main.html" })
                            console.log(`user : ${userEmail}`)
                        }
                        else {
                            res.status(401).json({ success: false, msg: "wrong password", redirect: "/users/login.html" })
                        }
                    })
                }
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    })

module.exports = router