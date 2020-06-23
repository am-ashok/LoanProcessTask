const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

let userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: 'Roles',
      required: true,
    },
    loggedIn: {
      type: Date,
      default: Date.now,
    },
    isActive: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.validPassword = (password) => {
  let user = this;
  return bcrypt.compareSync(password, user.password);
};

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
