var express = require('express');
var router = express.Router();

/*
Breakout #1
get all christmas tracks and render them into a pug view
 */
router.get('/christmastracks', function (req,res) {
    // TODO Breakout #1 - load all christmas tracks from your MongoDB and render them into a pug view by calling the following:
    // res.render('music', {tracks: docs})
    // (docs is the array containing the track documents)
});

/*
TODO Breakout #2:
TODO create a endpoint which expects a query parameter trackname and increases that track's popularity by 5 which each call
TODO finally, the updated track should be rendered in a pug view similar as in Breakout #1
 */




module.exports = router;
