var express = require('express');
var router = express.Router();

/*
Breakout #1
get all christmas tracks and render them into a pug view
 */
router.get('/christmastracks', function (req,res) {
    // TODO if your database does not contain the christmas track collection from the tutorial yet, see the tutorial 8 appendix slides for how to import the data
    const db = req.db;
    const tracks = db.get('tracks');

    // TODO extend the find tracks query by filtering
    tracks.find().then(docs =>{
        // TODO replace this mocked artists data with real artists from the database
        const mockedArtistsData = [
            {name:'Wham!'},{name:'Shakin Stevens'},{name: 'Michael Bublé'}
        ]
          res.render('music', {tracks: docs, artists: mockedArtistsData})

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
