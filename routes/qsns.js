const express = require('express')
const session = require("express-session")
const router = express.Router()

const bitsModel = require("../models/bits")

const getBitPack = async (testCategory, testLevel) => {
    try {
        const result = await bitsModel.find({
            category: testCategory,
            level: testLevel
        }).limit(5)
        if (result && result.length > 0) {
            return result
        } else {
            return null
        }
    } catch (e) {
        console.error("cannot get bitpack")
        throw e
    }
}

router.route("/")
    .get((req, res) => {
        if (req.query?.testCategory && req.query?.testLevel) {
            res.redirect(`/users/qsns.html?testCategory=${req.query.testCategory}&testLevel=${req.query.testLevel}`)
        }
        else if (req?.session?.testCategory && req?.session?.testLevel) {
            res.redirect(`/users/qsns.html?testCategory=${req.session.testCategory}&testLevel=${req.session.testLevel}`)
        } else {
            res.redirect("/users/main")
        }
    })
    .post(async (req, res) => {
        if (req.body?.testCategory && req.body?.testLevel) {
            try {
                const bitPack = await getBitPack(req.body?.testCategory, req.body?.testLevel)
                if (bitPack === null) {
                    res.status(404).json({ status: false, redirect: "/users/main" })
                } else {
                    res.status(200).json({ status: true, bitPack: bitPack, redirect: "/users/qsns.html" })
                }
            } catch (e) {
                res.status(500).json({ status: false, redirect: "/users/main" })
                console.error("something went wrong in database");
            }
        }
        else {
            res.redirect("/users/main")
        }
    })

module.exports = router