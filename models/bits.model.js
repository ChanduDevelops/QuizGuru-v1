const mongoose = require('mongoose');

const bitsSchema = new mongoose.Schema({
    category: String,
    level: String,
    qsn: { type: String, unique: true },
    a: String,
    b: String,
    c: String,
    d: String,
    ans: String,
});

const bitsModel = mongoose.model('bits', bitsSchema);

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: String,
});

const usersModel = mongoose.model('users', usersSchema);

module.exports = { usersModel, bitsModel };

// db string => mongodb+srv://20981a05b1:<password>@quiz.1hqfwot.mongodb.net/?retryWrites=true&w=majority&appName=Quiz
