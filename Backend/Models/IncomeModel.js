const mongoose = require('mongoose');
const User = require('./User');

const IncomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxLength: [50, 'Title cannot be more than 50 characters']
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required'],
        min: [0, 'Amount must be a positive number']
    },
    type: {
        type: String,
        default: "income"
    },
    date: {
        type: Date,
        required: [true, 'Date is required'],
        trim: true
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        trim: true
    },
    description: {
        type: String,
        maxLength: [100, 'Description cannot be more than 100 characters'],
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: [true, 'User is required']
    }
}, {timestamps: true});

module.exports = mongoose.model('Income', IncomeSchema);
