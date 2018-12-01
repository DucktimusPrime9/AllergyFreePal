
// server.js
// load the things we need
var express = require('express');
var bodyParser = require('body-parser');
// var cookieSession = require('cookie-session');
var multer = require('multer'); // v1.0.5
var upload = multer();
var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file

// configure app to use bodyParser()
// this will let us get the data from a POST

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(require('./routes'));




var port = process.env.PORT || 8080; // set our port




app.listen(port);
console.log('AllergyFreePay is running on 8080...');
