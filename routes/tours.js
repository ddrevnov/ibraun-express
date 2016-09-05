var express = require('express');
var router = express.Router();

router.get('/hood-river', function(req, res, next) {
    res.render('tours/hood-river');
});

router.get('/request-group-rate', function(req, res, next) {
    res.render('tours/request-group-rate');
});

router.get('/oregon-coast', function(req, res, next) {
    res.render('tours/oregon-coast');
});

module.exports = router;
