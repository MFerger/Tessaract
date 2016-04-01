var express = require('express');
var router = express.Router();

function authorizedUser(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/');
  }
}

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/signup', function(req, res, next) {
  res.render('signUp');
});

router.get('/logout',authorizedUser, function(req, res, next) {
  res.render('logOut');
});

router.get('/times',authorizedUser, function(req, res, next) {
  res.render('leaderBoard');
});

router.get('/timer', function(req, res, next) {
  res.render('timer');
});

router.post('/update',authorizedUser, function(req, res, next) {

});

router.get('/user/:id',authorizedUser, function(req, res, next) {
  res.render('userDetail');
});

router.post('/user/delete',authorizedUser, function(req, res, next) {
  res.render('userDetail');
});

module.exports = router;
