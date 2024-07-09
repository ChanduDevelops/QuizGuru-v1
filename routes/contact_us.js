const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    console.log('contact_page : get');

    res.redirect('contactus.html');
});

module.exports = router;
