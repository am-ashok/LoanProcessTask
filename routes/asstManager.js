var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('../views/asstManagerLogin.ejs', { title: 'ASST MANAGER LOGIN' });
});

module.exports = router;
