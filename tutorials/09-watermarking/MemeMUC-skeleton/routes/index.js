// Dependencies
const express = require('express');
const router = express.Router();
const Jimp = require('jimp');
const path = require('path');

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
/**
 * /memes - Returns a list of all available memes with name and link
 */
router.get('/memes', (req, res) => {
  res.json(Object.keys(IMAGES).map((key) => ({
    name: key,
    link: `/memes/${key}`,
  })));
});

/**
 * /memes/:key - Returns the image corresponding with a specified key, as generated meme
 * Parameters for the meme are passed as query parameters:
 * @param {string} text Text at the top
 * @param {string} text2 Text at the bottom
 * @param {string | number} x X-offset of the top text
 * @param {string | number} y Y-offset of the top text
 * @param {string | number} x2 X-offset of the bottom text
 * @param {string | number} y2 Y-offset of the bottom text
 */
router.get('/memes/:key', async (req, res, next) => {
  try {
    // Get the correct image from the IMAGES object
    const imageName = IMAGES[/* TODO */];

    // No meme found? Handle somewhere else!
    if (!imageName) {
      return next();
    }

    // Construct image paths
    const imagePath = path.join(IMAGE_BASE_PATH, imageName);
    const imageOutPath = path.join(
      IMAGE_BASE_PATH,
      `${path.basename(imageName).split('.')[0]}_out${path.extname(imageName)}`,
    );


    // TODO get all the query parameters


    // TODO read the image
    const img = await /* TODO */;

    const font = await Jimp.loadFont(FONT_PATH);

    // TODO write the text onto the image, using .print(font, x-offset, y-offset, text)
    const imageWithText = /* TODO */;

    // Write to output path
    await imageWithText.writeAsync(imageOutPath);

    // Send file to user
    res.sendFile(imageOutPath);
  } catch (err) {
    console.error(err);
    throw err;
  }
});

module.exports = router;
