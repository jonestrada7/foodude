var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json([{
    id: 1,
    username: "samsepi01"
  }, {
    id: 2,
    username: "D0loresH4ze"
  }, {
    id: 3,
    username: "hello"
  },
  {
    id: 4,
    username: "yes"
  }]);
});

module.exports = router;
