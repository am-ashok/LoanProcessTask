const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('./validation');
const TOKEN_SECRET = process.env.TOKEN_SECRET;

const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // Email Exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email already exists');

  // Hash Passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
  res.json('register page');
});

router.post('/login', async (req, res) => {
  try {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // Email Exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email is not found');
    // Password Correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Invalid Password');

    // Token assign
    const token = jwt.sign({ _id: user._id }, TOKEN_SECRET);
    res.header('auth-token', token).send(token);

    res.send('Logged in!');
  } catch (err) {
    console.log('error in somewhere. check again');
  }
});

module.exports = router;
