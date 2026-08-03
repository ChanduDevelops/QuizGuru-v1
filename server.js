if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const connectDB = require('./config/db');

const express = require('express');
const app = express();
const port = process.env.PORT ?? 3030;

const requireAuth = require('./middleware/auth');
const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.redirect('/index.html');
});

app.use(requireAuth);

app.use(express.static('public'));

(async function startServer() {
    try {
        await connectDB();

        app.listen(port, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`server listening at ${port}`);
            }
        });
    }
    catch (err) {
        console.error('MongoDB Atlas connection failed:', err);
        process.exit(1);
    }
})();

// setup .env
// PORT =

// MONGODB_URL = mongodb+srv://20981a05b1:<password>@quiz.1hqfwot.mongodb.net/?retryWrites=true&w=majority&appName=Quiz

// SESSION_SECRET = ''