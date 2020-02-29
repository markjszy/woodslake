const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Woods Lake' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Woods Lake' })
});

router.get('/get-involved', function(req, res, next) {
  res.render('get-involved', { title: 'Get Involved' })
});

router.get('/visit', function(req, res, next) {
  res.render('visit', { title: 'Visit' })
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Gallery' })
});

router.get('/pkwd', function(req, res, next) {
  res.render('pkwd/pkwd', { title: 'PKWD SUMMER GETAWAY 2020'})
});


module.exports = router;
