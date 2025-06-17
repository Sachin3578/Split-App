const express = require('express');
const router = express.Router();
const {
  getAllExpenses,
  addExpense,
  updateExpense,
  deleteExpense
} = require('../controllers/expenseController');

router.get('/', getAllExpenses);
router.post('/', addExpense); 
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);

module.exports = router;
