var express = require('express');
const router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
  console.log('Main Page');
});
router.get('/customer', (req, res, next) => {
  res.render('customerLogin', { title: 'Customer Login Page' });
  console.log('Customer Page');
});
router.get('/bankManager', (req, res) => {
  res.render('bankManagerLogin', { title: 'Bank Manager Login Page' });
});
router.get('/asstManager', (req, res) => {
  res.render('asstManagerLogin', { title: 'Asst Manager Login Page' });
});

module.exports = router;
