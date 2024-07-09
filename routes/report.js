const express = require('express');
const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        console.log('report_page : get');

        var [correctAnswerCount, wrongAnswerCount, unattemptedCount] = [
            req.session.correctAnswerCount,
            req.session.wrongAnswerCount,
            req.session.unattemptedCount,
        ];

        res.status(200).json({
            status: true,
            correctAnswerCount: correctAnswerCount,
            wrongAnswerCount: wrongAnswerCount,
            unattemptedCount: unattemptedCount,
            redirect: '/users/report.html',
        });
    })
    .post((req, res) => {
        console.log('report_page : post');

        req.session.correctAnswerCount = req.body?.correctAnswerCount;
        req.session.wrongAnswerCount = req.body?.wrongAnswerCount;
        req.session.unattemptedCount = req.body?.unattemptedCount;
        res.sendStatus(200);
    });

module.exports = router;
