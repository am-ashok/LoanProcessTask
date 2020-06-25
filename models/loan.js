const mongoose = require('mongoose');
const { number, string } = require('@hapi/joi');
const loanSchema = new mongoose.Schema(
  {
    loan_amount: {
      type: number,
      required: true,
      max: 7,
    },
    cibilScore: {
      type: number,
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
