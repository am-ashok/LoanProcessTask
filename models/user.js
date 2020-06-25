const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

// let userSchema = new Schema(
//   {
//     email: {
//       type: String,
//       max: 255,
//       min : 7,
//       unique: true,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       max: 1024,
//       min : 6
//     },
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//       max : 255
//     },
//     role: {
//       type: Schema.Types.ObjectId,
//       ref: 'Roles',
//       required: true,
//     },
//     date: {
//       type: Date,
//       default: Date.now,
//     },
//     isActive: {
//       type: Number,
//       default: 1,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// userSchema.methods.generateHash = (password) => {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
// };

// userSchema.methods.validPassword = (password) => {
//   let user = this;
//   return bcrypt.compareSync(password, user.password);
// };

// module.exports = mongoose.model('User', userSchema);
