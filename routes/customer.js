var express = require('express');
var router = express.Router();
const Loan = require('../models/loan');

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.json('Customers');
  res.render('../views/customerLogin.ejs', { title: 'CUSTOMER LOGIN' });
});

router.post('/loan', async (req, res) => {
  const loan = new Loan({
    loanAmount: req.body.loan_amount,
    cibilScore: req.body.cibil_Score,
    loanStatus: req.body.loanStatus,
  });
  try {
    processedLoan = await loan.save();
    res.send({ loan: loanStatus });
  } catch (err) {
    console.log(' error in loan page ...');
  }
  // console.log('Loan PAge');
  // res.json('Loan Page');
});
module.exports = router;
