var express = require('express');
var router = express.Router();
// var cleanerData = require('../public/GeoffCleaners.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
