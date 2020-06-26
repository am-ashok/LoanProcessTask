const mongoose = require('mongoose');
const { number, string } = require('@hapi/joi');
const loanSchema = new mongoose.Schema(
  {
    loan_amount: {
      type: Number,
      required: true,
      max: 7,
    },
    cibilScore: {
      type: Number,
      required: true,
    },
    loanStatus: {
      type: Number,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;
