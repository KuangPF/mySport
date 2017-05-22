var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/information', function(req, res, next) {
    res.render('information', { title: 'Express' });
});

module.exports = router;
