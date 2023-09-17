var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {titulo: "pagina de inicio"});
    next()
});

router.get('/menu-categories', function(req, res, next){
    res.render('menu-categories', { title: 'menu-categories' });
    next()
});

router.get('/single-category', function(req, res, next){
    res.render('single-category', { titulo: "single category"})
    next()
});

router.get('/about', function(req, res, next){
    res.render('about', { titulo: "about"})
    next()
});

router.get('/notfound', function(req, res, next){
    res.render('notfound', { titulo: "notfound"})
    next()
});


module.exports = router;