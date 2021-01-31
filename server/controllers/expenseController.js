const expenses = require('../models/expensesModel');

//POST new expense
exports.add_expense = function(req, res, next) {
  let expense = new expenses(
    {
      itemName: req.body.itemName,
      expense: req.body.expense,
      tip: req.body.tipPercentage,
      shareOfExpense: req.body.splitBy,
      reminderFrequency: req.body.reminderFreq
    }
  );

  expense.save(function(err) {
    if(err) {return next(err)}
  }) 
}