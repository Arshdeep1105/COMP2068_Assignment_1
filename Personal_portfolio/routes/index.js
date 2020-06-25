/* 
* File Name: index.js
* Author's name:  Arshdeep Singh
* Website name: Personal Portfolio
* File description: this is the main file of project as it conatin the request url and also the title. It is a js file.
*/
'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Personal Portfolio' });
});
/* GET about me page. */
router.get('/aboutMe', function (req, res) {
    res.render('aboutMe', { title: 'About Me' });
});
/* GET projects page. */
router.get('/projects', function (req, res) {
    res.render('projects', { title: 'Projects' });
});
/* GET services page. */
router.get('/services', function (req, res) {
    res.render('services', { title: 'Services' });
});
/* GET contact page. */
router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact' });
});




module.exports = router;
