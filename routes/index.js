const path = require("path")
const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
    let reqPath = path.join(__dirname, "../", "public", "about.html")
    console.log(reqPath);
    res.sendFile(reqPath)
})
router.use(express.static("public"))


module.exports = router