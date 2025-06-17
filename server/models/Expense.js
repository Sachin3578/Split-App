const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    amount: {type: Number, required: true, min: 0},
    description: {type: String, required: true},
    paid_by: {type: String, required: true},
    participants: [String],
    split_type: {type: String, enum: ['equal', 'percentage', 'exact'], default: 'equal'},
    split_values: [Number]
}, {timestamps: true});

module.exports = mongoose.model('Expense', ExpenseSchema);