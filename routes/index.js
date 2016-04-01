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


router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signUp', { title: 'Express' });
});

router.get('/logout',authorizedUser, function(req, res, next) {
  res.render('logOut', { title: 'Express' });
});

router.get('/times',authorizedUser, function(req, res, next) {
  res.render('leaderBoard', { title: 'Express' });
});

router.get('/timer',authorizedUser, function(req, res, next) {
  res.render('timer', { title: 'Express' });
});

router.post('/update',authorizedUser, function(req, res, next) {
  knex('users').

router.get('/user/:id',authorizedUser, function(req, res, next) {
  res.render('userDetail', { title: 'Express' });
});

router.post('/user/delete',authorizedUser, function(req, res, next) {
  res.render('userDetail', { title: 'Express' });
});

module.exports = router;
