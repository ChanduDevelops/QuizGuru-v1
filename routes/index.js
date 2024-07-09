const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('entrance ->');

    res.redirect('/users/index.html');
});
router.use(express.static('public'));

module.exports = router;
