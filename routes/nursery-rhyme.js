var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('nursery-rhyme');
});

router.get('/data', function(req, res){
    res.json({
        animal: 'бельчонок',
        bodyPart: 'хвост',
        adjective: 'пушистый',
        noun: 'черт',
    });
});

module.exports = router;
