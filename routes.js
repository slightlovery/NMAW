/**
 * Created by user on 2017/3/1.
 */
var crypto = require('crypto');
var express = require('express');
var router = express.Router();

var users = require('./controllers/users_controller');
router.use('/static', express.static('./static'));
router.use('/lib', express.static('./lib'));
router.get('/', function (req, res) {
    if (req.session.user) {
        res.render('index.html', {
            username: req.session.username,
            msg: req.session.msg
        });
    } else {
        req.session.msg = 'Access Denied';
        res.redirect('/login');
    }
});
router.get('/user', function (req, res) {
    if (req.session.user) {
        res.render('user.html', {msg: req.session.msg});
    } else {
        req.session.msg = 'Access Denied';
        res.redirect('/login');
    }
});
router.get('/signup', function (req, res) {
    if (req.session.user) {
        res.redirect('/');
    }
    res.render('signup.html', {msg: req.session.msg});
});
router.get('/login', function (req, res) {
    if (req.session.user) {
        res.redirect('/');
    }
    res.render('login.html', {msg: req.session.msg});
});
router.get('/logout', function (req, res) {
    req.session.destory(function () {
        res.redirect('/login');
    });
});
router.post('/signup', users.signup);
router.post('/user/update', users.updateUser);
router.post('/user/delete', users.deleteUser);
router.post('/login', users.login);
router.post('/user/profile', users.getUserProfile);

module.exports = router;