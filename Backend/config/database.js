const mongoose = require('mongoose');
const config = require('config');
require('dotenv').config();
const db = process.env.MONGO_URI || config.get('MONGO_URI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log("problem database.js me he")
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
