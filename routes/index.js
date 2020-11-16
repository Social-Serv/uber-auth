var express = require('express');
var router = express.Router();

let count = 0;
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('hello');
  count++;
  res.status(500).send('Hello World');
});

router.get('/count', function(req, res, next) {
  console.log('print count');
  res.status(500).send({count});
});

module.exports = router;
