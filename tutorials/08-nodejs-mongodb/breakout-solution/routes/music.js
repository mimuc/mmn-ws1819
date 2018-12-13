var express = require('express');
var router = express.Router();

/*
Breakout #1
get all christmas tracks and render them into a pug view
 */
router.get('/christmastracks', function (req,res) {
    const db = req.db;
    const tracks = db.get('tracks');
    //albums.find({artists:{$elemMatch:{name:"Queen"}}
    tracks.find().then(docs =>{
          res.render('music', {tracks: docs})
      }).catch(e => {
          console.error(e);
          res.status(500).send();
    });
});

/*
Breakout #2:
calling this with query parameter trackname increases the track's popularity by 5 which each call
The updated track will be rendered
 */
router.post('/updatepopularity', (req,res) => {
   const db = req.db;
   const tracks = db.get('tracks');

   const trackname = req.query.trackname;

   tracks.findOneAndUpdate({name:trackname},{$inc: {popularity: 5}}).then(updatedDoc => {
       res.render('music', {tracks: [updatedDoc]})
   }).catch(e => {
       console.error(e);
       res.status(500).send();
   });
});



module.exports = router;
