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

//test google map api
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBJiO-3HoqtE1E5KTSzeQp1Xut9epGkAlQ'
});

//place search
// googleMapsClient.findPlace({
// 	input:"Kenmore Classroom Building",
// 	inputtype: "textquery",
// 	}, function(err, response) {
//     if (!err) {
//         // console.log(response.json.results);
//         var results = response.json;
//         console.log(JSON.stringify(results));
//         // var i = 0;
//         // results.forEach(function(result) {
//         //     i++;
//         //     console.log(i);
//         //     console.log(result);
//         // })
//     } else {
//         console.log(err);
//     }
// });

// place search
// googleMapsClient.findPlace({
// 	input:"Kenmore Classroom Building",
// 	inputtype: "textquery",
// 	}, function(err, response) {
//     if (!err) {
//         // console.log(response.json.results);
//         var results = response.json;
//         console.log(JSON.stringify(results));
//     } else {
//         console.log(err);
//     }
// });

//places search
// googleMapsClient.places({
//     query: "Kenmore Classroom Building",
// }, function(err, response) {
//         if (!err) {
//             // console.log(response.json.results);
//             var results = response.json;
//             console.log(results);

//         } else {
//             console.log(err);
//         }
// });

// nearby places search
// googleMapsClient.placesNearby({
//     location: {
//         lat: 42.3537332,
//         lng: -71.128689,
//     },
//     type: "restaurant",
//     rankby:"distance",
// }, function(err, response) {
//     if (!err) {
//         // console.log(response.json.results);
//         var results = response.json.results;
//         console.log(results.length);
//         var i = 0;
//         results.forEach(function(result) {
//             i++;
//             console.log(i);
//             console.log(result);
//         })
//     } else {
//         console.log(err);
//     }
// });

app.listen(port);
console.log('AllergyFreePay is running on 8080...');