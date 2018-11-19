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

var fs = require('fs');
var file = './public/allergysource.json';
var allergy_source = JSON.parse(fs.readFileSync(file));
var port = process.env.PORT || 8080; // set our port



// index page 
app.get('/', function(req, res) {
    var allergies = [
        { name: 'milk' },
        { name: 'peanuts'},
        { name: 'gulten'},
        { name: 'soy'},
        { name: 'nuts'},
        { name: 'egg'},
        { name: 'fish'},
        { name: 'shellfish'},
    ];
    res.render('pages/index', {
        allergies: allergies,
    });
});


// maps page
app.get('/maps', upload.none(), function(req, res) {
    if(req.body) {
        // console.log(req.body.data);
        console.log(req.query.zipcode)
        console.log(req.query.allergy);
        var zipcode = req.query.zipcode;
    }
    res.render('pages/maps',{
        zipcode: zipcode,
    });

});


// allergies page
app.get('/allergies', function(req, res){


    res.render('pages/allergies',{
        allergysources: allergy_source, 
    });
});


// //maps pages
// app.get('/maps', function(req, res) {


//     res.render('/pages/maps' {

//     });
// });


// //allergy pages
// app.get('/allergy', function(req, res) {

//     res.render('/pages/maps' {
//         allergy: allergies,
//     })
// })


// var router = express.Router(); // get an instance of the express Router

// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });
// });


// routers of maps request
// router.get('/maps', function(req, res) {
//     res.render('pages/maps',{
//         //alergies: allergies,
//     });
// });

// // REGISTER OUR ROUTES -------------------------------
// // all of our routes will be prefixed with /api
// app.use('/', router);






app.listen(port);
console.log('AllergyFreePay is running on 8080...');

// for testing data
for (var i = allergy_source.length - 1; i >= 0; i--) {
    console.log(allergy_source[i].name);
    console.log(allergy_source[i].food_eg);
}


