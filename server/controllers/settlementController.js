const Expense = require('../models/Expense');

//Get List of all unique people
const getPeople = async (req, res) => {
    try{
        const expenses =  await Expense.find();
        const peopleSet = new Set();
        
        expenses.forEach(exp => {
            peopleSet.add(exp.paid_by);
            exp.participants.forEach(p => peopleSet.add(p));
        });

        const people = Array.from(peopleSet);
        res.status(200).json({success: true, data: people});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};


//get net balance
const getBalances = async (req, res) => {
    try{
        const expenses = await Expense.find();
        const balances = {};

        expenses.forEach(exp => {
            const numParticipants = exp.participants.length;
            const share = exp.amount / numParticipants;

            //credit the payer
            balances[exp.paid_by] = (balances[exp.paid_by] || 0) + exp.amount;

            //debit each participant
            exp.participants.forEach(p => {
                balances[p] = (balances[p] || 0) - share;
            });
        });
        res.status(200).json({success: true, data: balances});
    } catch(error){
        res.status(500).json({success: false, message: error.message});
    }
};

//get optimized settlement means who pays whom
const getSettlements = async (req, res) => {
  try {
    const expenses = await Expense.find();
    const balances = {};

    // Calculate net balance per person
    expenses.forEach(exp => {
      const share = exp.amount / exp.participants.length;

      // credit the payer
      balances[exp.paid_by] = (balances[exp.paid_by] || 0) + exp.amount;

      // debit each participant
      exp.participants.forEach(p => {
        balances[p] = (balances[p] || 0) - share;
      });
    });

    // Round values
    for (let person in balances) {
      balances[person] = Math.round(balances[person] * 100) / 100;
    }

    // Separate creditors and debtors
    const creditors = [];
    const debtors = [];

    for (let person in balances) {
      const amount = balances[person];
      if (amount > 0) {
        creditors.push({ person, amount });
      } else if (amount < 0) {
        debtors.push({ person, amount: -amount }); // convert to positive
      }
    }

    const settlements = [];

    let i = 0, j = 0;
    while (i < debtors.length && j < creditors.length) {
      const pay = Math.min(debtors[i].amount, creditors[j].amount);

      settlements.push({
        from: debtors[i].person,
        to: creditors[j].person,
        amount: Math.round(pay * 100) / 100
      });

      debtors[i].amount -= pay;
      creditors[j].amount -= pay;

      if (debtors[i].amount === 0) i++;
      if (creditors[j].amount === 0) j++;
    }

    res.status(200).json({ success: true, data: settlements });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


module.exports = {
    getPeople,
    getBalances,
    getSettlements
};