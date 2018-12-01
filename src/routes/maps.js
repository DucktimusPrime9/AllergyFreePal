var express = require('express'),
    router = express.Router()

const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDglInf1mZbMmHuhhJIHbsphj5GxiiopHg'
});

router.get('/', function(req, res) {
    if (req.body) {
        // console.log(req.body.data);
        console.log(req.query.zipcode);
        console.log(req.query.allergy);
        console.log(req.query.position_lat);
        console.log(req.query.position_lng);
        console.log(req.query.position);
        var zipcode = req.query.zipcode;
        var lat = req.query.position_lat;
        var lng = req.query.position_lng;

    }
    res.render('pages/maps', {
        zipcode: zipcode,
        lat: lat,
        lng: lng,
    });
})
//
router.post('/', function(req, res) {
    if (req.query) {
        var position = req.query.position;
        console.log(JSON.stringify(req.query.position));
        googleMapsClient.palcesNearby({
            location: {
                lat: position.lat,
                lng: position.lng,
            },
            type: "restaurant",
        }, function(err, response) {
            if (!err) {
                console.log(JSON.stringify(response.json.results, null, "\t"));
            }
        });
    }

})


// googleMapsClient.placesNearby({
//   address: '1600 Amphitheatre Parkway, Mountain View, CA'
// }, function(err, response) {
//   if (!err) {
//     console.log(JSON.stringify(response.json.results, null, "\t"));
//   }
// });



module.exports = router