if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mongoose = require('mongoose');
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connected to mongoose!');
    })
    .catch((e) => {
        console.error(e.message);
    });

const express = require('express');
const app = express();
const port = process.env.PORT ?? 3030;

const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.redirect('/index.html');
});

app.use(express.static('public'));

app.listen(port, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`server listening at ${port}`);
    }
});

// setup .env
// PORT =

// DATABASE_URL = mongodb+srv://20981a05b1:<password>@quiz.1hqfwot.mongodb.net/?retryWrites=true&w=majority&appName=Quiz

// SESSION_SECRET = ''

//operations on db is performing on test collection bydefault. needs to update it to quiz collection
