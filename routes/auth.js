'use strict';
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
var knex = require('knex')(require('../knexfile')['production']);

router.post('/signup', function(req,res,next){
  // validate that the form was filled out
   var errorArray = [];

   if(!req.body.username) {
     errorArray.push('Please enter a username');
   }
   if(!req.body.password) {
     errorArray.push('Please enter a password');
   }
   if(errorArray.length > 0) {
     res.render('signUp', {errors: errorArray});
   }
   else{
  var hash = bcrypt.hashSync(req.body.password, 8);
  knex('users')
  .insert({'username': req.body.username, 'password': hash})
  .then(function(response){
    res.redirect('/');
  })
}

});

router.post('/login', function(req,res,next){
  knex('users')
  .where('username', '=', req.body.username)
  .first()
  .then(function(response){
    if(response && bcrypt.compareSync(req.body.password, response.password)){
      req.session.user = response.username;
      req.session.id = response.id;
      res.redirect('/');
    } else {
      res.render('login', {error: 'Invalid username or password'});
    }
  });
});

router.get('/logout', function(req,res,next){
  req.session.user = null;
  res.redirect('/');
});

module.exports = router;
