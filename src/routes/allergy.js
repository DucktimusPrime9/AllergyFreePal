var express = require('express'),
    router = express.Router()

// router.get('/:id', function(req, res) {
//   Comment.get(req.params.id, function (err, comment) {
//     res.render('comments/comment', {comment: comment})
//   })
// })


//read allergy source data from static file
var fs = require('fs');
var file = './public/allergysource.json';
var allergy_source = JSON.parse(fs.readFileSync(file));
// console.log(allergy_source);

router.get('/', function(req, res) {
    if (req.query.allergy_name) {
        var allergyName = req.query.allergy_name;
        console.log("got it"); // print when get query request
        allergy_source.forEach(function(allergy) {
            if (allergy.name == allergyName) {
                var msg = JSON.stringify(allergy.food_eg);
                res.send(msg);
            }
        })
    } else {
        res.render('pages/allergy', {
            allergysources: allergy_source,
        });
    }

})

//which I want to use but doesn't work
router.get('/:allergy_name', function(req, res) {
    if (req.params) {
        // var allergyName = req.data.allergy_name;
        console.log('got request!');

    }
})


module.exports = router