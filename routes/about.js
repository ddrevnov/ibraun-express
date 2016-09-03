var express = require('express');
var router = express.Router();

var fortunes = [
"Победи свои страхи, или они победят тебя.",
"Рекам нужны истоки.",
"Не бойся неведомого.",
"Тебя ждет приятный сюрприз.",
"Будь проще везде, где только можно.",
];

/* GET home page. */
router.get('/', function(req, res, next) {
  var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', { fortune: randomFortune });
});

module.exports = router;
