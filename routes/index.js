var express = require('express');
var router = express.Router();

const cityList = [
  {
    city: 'Paris',
    img: 'url',
    min_temp: 10,
    max_temp: 20
  },
  {
    city: 'London',
    img: 'url',
    min_temp: 5,
    max_temp: 15
  },
  {
    city: 'Marseille',
    img: 'url',
    min_temp: 15,
    max_temp: 20
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/weather', function(req, res, next) {
  res.render('weather', { cityList })
})

module.exports = router;
