var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
