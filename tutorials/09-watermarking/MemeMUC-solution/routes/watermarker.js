const express = require('express');
const router = express.Router();
const path = require('path');
const Jimp = require('jimp');
const fs = require('fs');

const watermarkedImagesDirectory = path.join(__dirname, '../watermarks');
const publicImagesDirectory = '../public/images';

let watermark; // holds the Jimp image
const watermarkPath = path.join(__dirname, '../public/images/mememuc.png');

// first, make sure that the directory exists.
if (!fs.existsSync(watermarkedImagesDirectory)) {
  fs.mkdirSync(watermarkedImagesDirectory);
}


Jimp.read(watermarkPath, (err, img) => {
  watermark = img;

  // you actually can register routes within *callbacks*
  router.use('/images/:image', (req, res, next) => {
    const imagePath = path.join(__dirname, publicImagesDirectory, req.params.image);
    const markedPath = path.join(watermarkedImagesDirectory, 'wm-' + req.params.image);

    const imageWrittenCallback = () => res.sendFile(markedPath);

    const imageCompositedCallback = (err, img) => {
      if (err) throw err;
      img.write(markedPath, imageWrittenCallback);
    };

    if (fs.existsSync(imagePath)) {
      console.info('image ' + imagePath + ' exists');

      Jimp.read(imagePath, (err, img) => {
        if (err) {
          throw err;
        }
        const [ x, y ] = [
          img.getWidth() - watermark.getWidth() - 16,
          img.getHeight() - watermark.getHeight() - 16
        ];
        img.composite(watermark, x, y, imageCompositedCallback)
      });
    } else {
      console.warn(`${imagePath} does not exist`);
      // don't send the response, just pass it through
      next();
    }
  });
});

module.exports = router;
