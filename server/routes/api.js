let express = require('express');
let router = express.Router();

//Controller modules
const expenseController = require('../controllers/expenseController');

//Routes for expenses

//POST expense 
router.post('/add-expense', expenseController.add_expense)

module.exports = router