const express = require("express")
const router = express.Router()
const bcrypt = require('bcrypt')
const saltRounds = 10

const usersModel = require("../models/users")

router.route("/")
    .get((req, res) => {
        console.log("signup get");
        res.redirect("signup.html")
    })
    .post((req, res) => {
        const bodyData = req.body
        const username = bodyData.username
        const email = bodyData.email
        const password = bodyData.password
        console.log(username, email, password)
        bcrypt.hash(password, saltRounds, (err, hash) => {
            usersModel
                .create({ username, email, password: hash })
                .then(() => {
                    res.status(200).json({ success: true, redirect: "/users/login.html" })
                })
                .catch((err) => {
                    if (err.code === 11000) {
                        console.error("Duplicate key error. Data not inserted.");
                        res.status(409).json({ success: false, redirect: "/users/signup.html" })
                    } else {
                        console.error("Error", err)
                        res.status(500).json({ success: false, redirect: "/users/signup.html" })
                    }
                })
        })
    })


module.exports = router