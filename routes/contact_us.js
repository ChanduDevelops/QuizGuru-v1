const express = require('express')
const router = express.Router()

router.route("/").
    get((req, res) => {
        res.redirect("contactus.html")
    })

module.exports = router

