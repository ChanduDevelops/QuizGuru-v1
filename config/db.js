const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB Atlas connection successfully!');
    } catch (e) {
        console.error(e.message);
    }
};

module.exports = connectDB;