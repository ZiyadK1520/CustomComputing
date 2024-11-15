var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home Page',
   });
});

router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
   });
});

router.get('/shop_pg', function(req, res, next) {
  res.render('shop_pg', { 
    title: 'Shop Now',
   });
});

router.get('/products', function(req, res, next) {
  res.render('index', { 
    title: 'Products',
   });
});

router.get('/custom', function(req, res, next) {
  res.render('custom.ejs', { 
    title: 'Custom',
   });
});

router.get('/contact', function(req, res, next) {
  res.render('contact.ejs', { 
    title: 'Contact Us',
   });
});

module.exports = router;
