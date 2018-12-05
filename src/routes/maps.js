var express = require('express'),
    router = express.Router()

const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBJiO-3HoqtE1E5KTSzeQp1Xut9epGkAlQ'
});



var fs = require('fs');
var file = './public/adding_data.json';
var adding_info = JSON.parse(fs.readFileSync(file));


router.get('/', function(req, res) {
    if (req.body) {
        // console.log(req.body.data);
        console.log(req.query.zipcode);
        console.log(req.query.allergy);
        console.log(req.query.position_lat);
        console.log(req.query.position_lng);
        // console.log(JSON.stringify(req.query.position)); 
        var zipcode = req.query.zipcode;
        // var lat = req.query.position_lat;
        // var lng = req.query.position_lng;
        var lat = 42.349417;
        var lng = -71.0980979;

    }
    res.render('pages/maps', {
        zipcode: zipcode,
        lat: lat,
        lng: lng,
    });
})
//
router.post('/', function(req, res) {
    if (req.body) {

        //get nearby restaurant from google map api
        console.log("latitude:" + req.body.lat + ", longitude:" + req.body.lat);

        googleMapsClient.placesNearby({
            location: {
                lat: 42.349417,
                lng: -71.0980979,
            },
            rankby: 'distance',
            type: "restaurant",

        }, function(err, response) {
            if (!err) {
                console.log("got position!");
                var results = response.json.results;

                //add testing data into response
                for (var i = 0; i < results.length; i++) {
                    results[i].intro = adding_info[i].intro;
                    results[i].offering = adding_info[i].offering;
                }
                var msg = JSON.stringify(results, null, "\t");
                console.log(msg);
                res.send(msg);

            } else {
                console.log(err);
            }
        });
    }

})






module.exports = router