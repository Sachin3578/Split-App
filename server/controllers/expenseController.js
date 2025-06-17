const Expense =  require('../models/Expense');

//Get all expenses
const getAllExpenses = async (req, res) => {
    const expenses = await Expense.find().sort({createdAt: -1});
    res.status(200).json({success: true, data: expenses});
};

//add new expense
const addExpense = async(req, res) => {
    try{
        const {amount, description, paid_by, participants, split_type, split_values } = req.body;

        if(!amount || !description || !paid_by)
            return res.status(400).json({success: false, messeage: 'Missing required fields'});

        const newExpense = new Expense({ amount, description, paid_by, participants, split_type, split_values});
        await newExpense.save();

        res.status(201).json({success: true, data: newExpense, message: 'Expense added successfully'});
    } catch(error){
        res.status(500).json({success: false, message: error.message});
    }
}

//update expense
const updateExpense = async(req, res) => {
    try{
        const updated = await Expense.findByIdAndUpdate(req.params.id,  req.body, {new: true});
        if(!updated) return res.status(404).json({success: false, message:'Expense not found'});
        res.status(200).json({success: true, data: updated});
    }catch(error) {
        res.status(500).json({success: false, message: error.message});
    }
};


//Delete expense
const deleteExpense = async (req, res) => {
    try{
        const deleted = await Expense.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({success: false, message: 'Expense not found'});
        res.status(200).json({success: true, message: 'Expense deleted'});
    }catch(error){
        res.status(500).json({success: false, message: error.message});
    }
};

module.exports = {
    getAllExpenses,
    addExpense,
    updateExpense,
    deleteExpense
};
