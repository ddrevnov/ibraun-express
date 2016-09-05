var express = require('express');
var router = express.Router();
var fortune = require('../lib/fortune');

router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'About',
        fortune: fortune.getFortune(),
        pageTestScript: '/qa/tests-about.js'
    });
});

module.exports = router;
