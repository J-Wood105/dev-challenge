var express = require('express');
var router = express.Router();
var request = require('request');
// var cleanerData = require('../public/GeoffCleaners.json');

// console.log(cleanerData.services);

/* GET services listing. */
router.get('/', function(req, res, next) {
  
  res.render('services');
});

module.exports = router;
