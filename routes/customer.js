var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.json('Customers');
  res.render('../views/customerLogin.ejs', { title: 'CUSTOMER LOGIN' });
});

module.exports = router;
