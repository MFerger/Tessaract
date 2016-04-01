var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signUp', { title: 'Express' });
});

router.get('/logout', function(req, res, next) {
  res.render('logOut', { title: 'Express' });
});

router.get('/times', function(req, res, next) {
  res.render('leaderBoard', { title: 'Express' });
});

router.get('/timer', function(req, res, next) {
  res.render('timer', { title: 'Express' });
});

router.get('/update', function(req, res, next) {
  res.render('timer', { title: 'Express' });
});

router.get('/user/:id', function(req, res, next) {
  res.render('userDetail', { title: 'Express' });
});

router.post('/user/delete', function(req, res, next) {
  res.render('userDetail', { title: 'Express' });
});

module.exports = router;
