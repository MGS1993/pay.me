const expenses = require('../models/expensesModel');
const nodeMail = require('../nodeMailer/nodeMailer');
//POST new expense
exports.add_expense = function(req, res, next) {
  let expense = new expenses(
    {
      itemName: req.body.itemName,
      expense: req.body.expense,
      tip: req.body.tipPercentage,
      shareOfExpense: req.body.splitBy,
      reminderFrequency: req.body.reminderFreq,
      payMe: req.body.payMe
    }
  );

  expense.save(function(err) {
    if(err) {return next(err)}
  }) 

  // transporter.sendMail(mailOptions, function(error, info) {
  
  //   if(error) {
  //     console.log(error);
  //   } else {
  //     console.log('Email sent ' + info.response)
  //   }
  // })
}

