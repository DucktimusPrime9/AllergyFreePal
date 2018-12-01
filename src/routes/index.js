var express = require('express')
  , router = express.Router()

// router.use('/comments', require('./comments'))
// router.use('/users', require('./users'))

// middleware that is specific to this router
router.use('/allergy',require('./allergy'))
router.use('/maps',require('./maps'))
// define the home page route
router.get('/', function (req, res) {
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
})

module.exports = router