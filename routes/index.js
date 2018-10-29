var express = require('express');

var config = require('../config');
var MarcopoloService = require('../services/MarcopoloService');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Marco Polo Game' });
});

router.get('/get-numbers', function(req, res, next) {
    if (config.choices.indexOf(req.query.choice) === -1) {
        return res.redirect('/');
    }
    let numbers = MarcopoloService.getNumbers(req.query.choice);
    res.render('result', { title: 'Marco Polo Game Result', numbers, breakPoint: config.breakPoint });
});

/*
if you need api for get numbers
    router.get('/api/get-numbers', function(req, res, next) {
        if (config.choices.indexOf(req.query.choice) === -1) {
            let error = {
                code: "INVALID_CHOICE",
                message: "Invalid Choice."
            };
            return res.status(400).json(error);
        }
        let numbers = MarcopoloService.getNumbers(req.query.choice);
        res.json({
            numbers,
            breakPoint: config.breakPoint
        });
    });
*/
module.exports = router;
