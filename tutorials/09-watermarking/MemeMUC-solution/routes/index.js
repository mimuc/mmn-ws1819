// Dependencies
const express = require('express');
const router = express.Router();
const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

// Constants
const FONT_PATH = path.join(__dirname, '..', 'public', 'impact.fnt');
const IMAGE_BASE_PATH = path.join(__dirname, '..', 'public', 'images');

/**
 * Map of all available memes.
 * Maps from key/name to filepath in public/images
 */
const IMAGES = {
  boromir: 'boromir.png',
  doge: 'doge.jpg',
  raptor: 'raptor.jpg',
};

// Routes
router.get('/memes', (req, res) => {
  res.json(Object.keys(IMAGES).map((key) => ({
    name: key,
    link: `/memes/${key}`,
    thumb: `/memes/${key}/thumb`,
  })));
});

router.get('/memes/:key/thumb', (req, res) => {
  const imageName = IMAGES[req.params['key']];
  if (!imageName) {
    return next();
  }

  const imagePath = path.join(IMAGE_BASE_PATH, imageName);
  const imageOutPath = path.join(IMAGE_BASE_PATH, `${path.basename(imageName).split('.')[0]}_thumb${path.extname(imageName)}`);
  if (fs.existsSync(imageOutPath)) {
    res.sendFile(imageOutPath);
  } else {
    Jimp.read(imagePath)
      .then((img) => img.scale(0.25))
      .then((img) => img.writeAsync(imageOutPath))
      .then(() => res.sendFile(imageOutPath));
  }
});

router.get('/memes/:key', async (req, res, next) => {
  try {
    const imageName = IMAGES[req.params['key']];
    if (!imageName) {
      return next();
    }

    const { x, y, x2, y2, text, text2 } = req.query;

    const imagePath = path.join(IMAGE_BASE_PATH, imageName);
    const imageOutPath = path.join(
      IMAGE_BASE_PATH,
      `${path.basename(imageName).split('.')[0]}_out${path.extname(imageName)}`,
    );

    const img = await Jimp.read(imagePath);
    const font = await Jimp.loadFont(FONT_PATH);

    const image = {
      data: img.scale(2),
      width: img.getWidth(),
      height: img.getHeight(),
    };

    const upperCaption = {
      text: text || '',
      x: (image.width - Jimp.measureText(font, text || '')) / 2 + (parseInt(x) || 0),
      y: 50 + (parseInt(y) || 0),
    };
    const lowerCaption = {
      text: text2 || '',
      x: (image.width - Jimp.measureText(font, text2 || '')) / 2 + (parseInt(x2) || 0),
      y: (image.height - Jimp.measureTextHeight(font, text2 || '') - 50) + (parseInt(y2) || 0),
    };

    const imageWithText = image.data
      .print(font, upperCaption.x, upperCaption.y, upperCaption.text)
      .print(font, lowerCaption.x, lowerCaption.y, lowerCaption.text)

    await imageWithText.writeAsync(imageOutPath);

    res.sendFile(imageOutPath);
  } catch (err) {
    console.error(err);
    next();
  }
});

module.exports = router;
