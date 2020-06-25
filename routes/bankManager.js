var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.json('Bank Manager');
  res.render('../views/bankManagerLogin.ejs', { title: 'BANK MANAGER LOGIN' });
});

module.exports = router;
