var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['production']);

function authorizedUser(req, res, next) {

  if (req.session.user) {
    next();
  } else {
    res.redirect('/');
  }
}

/* GET home page. */


router.get('/', function(req, res, next) {

  knex('users').where('username',req.session.user).first().then(function(records){
    console.log(records);
    res.render('index', { users: records });
  });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/signup', function(req, res, next) {
  res.render('signUp');
});

router.get('/times',authorizedUser, function(req, res, next) {
  knex('times').limit(5).orderBy('solve_time').then(function(records){
    res.render('leaderBoard', { scores: records });
  });
});

router.get('/timer', function(req, res, next) {
  knex('users').where('username',req.session.user).first().then(function(records){
    res.render('timer', { users: records });
  });
});

router.post('/time/add',authorizedUser, function(req, res, next) {
  knex('times')
  .insert({'solve_time': req.body.time, 'username': req.session.user})
  .then(function(response){
    res.redirect('/');
  })

});

router.get('/user',function(req,res,next) {
  res.redirect('/login');
});

router.get('/user/:id',authorizedUser, function(req, res, next) {
  knex('users').where('users.id', req.params.id)
  .innerJoin('times', 'users.username', 'times.username')
  .limit(5).orderBy('solve_time')
  .then(function(records){
    res.render('userDetail', { scores: records });
  });
});

router.post('/user/delete',authorizedUser, function(req, res, next) {
  res.render('userDetail');
});

module.exports = router;
