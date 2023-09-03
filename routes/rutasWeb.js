var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {titulo: "pagina de inicio"});
});

router.get('/menu-categories', function(req, res, next){
    res.render('menu-categories', { title: 'menu-categories' });
});

router.get('/single-category', function(req, res, next){
    res.render('single-category', { titulo: "single category"})
});

module.exports = router;