'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const flash = require('flash');
const Users = function() { return knex('users') };

router.post('/signup', function(req, res, next) {
    Users().where({
        email: req.body.email
    }).first().then(function(user) {
        if (!user) {
            let hash = bcrypt.hashSync(req.body.password, 10);
            Users().insert({
                email: req.body.email,
                password: hash
            }).then(function(){
              req.flash('info', 'Thanks for signing up.');
              res.redirect('/');
            });
        } else {
            req.flash('error', 'You already have an account with us.');
            res.redirect('/users/login');
        }
    });
});

router.post('/login', function(req, res, next) {
    Users().where({
        email: req.body.email,
    }).first().then(function(user) {
        if ( user && bcrypt.compareSync(req.body.password, user.password) ) {
            res.cookie('userID', user.id, {
                signed: true
            });
            req.flash('info', 'Welcome back!');
            res.redirect('/');
        } else {
            req.flash('error', 'Invalid email or password.');
            res.redirect('/users/login');
        }
    });
});

router.get('/logout', function(req, res) {
    res.clearCookie('userID');
    req.flash('info', 'Goodbye!');
    res.redirect('/');
});

module.exports = router;
