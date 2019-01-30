$(function () {
  // All the relevant DOM elements
  const text = $('#text');
  const text2 = $('#text2');
  const x = $('#x');
  const y = $('#y');
  const x2 = $('#x2');
  const y2 = $('#y2');
  const memeList = $('aside ul');
  const outputImage = $('.meme img');

  let selectedMeme = '';

  // TODO Add URL to your local meme api
  const PHP_API_BASE = 'http://localhost/mememuc';
  const MEME_API_BASE = 'http://flobe-online.de:3002';

  // Load the list of possible memes
  $.ajax({
    url: MEME_API_BASE + '/memes/',
    method: 'GET',
    datatype: 'json',
    success: (memes) => {
      // Clear out the list of available meme images
      const list = $('.meme-selection ul');
      list.empty();

      // For each available image
      $.each(memes, function (meme) {
        // Create the DOM
        const li = $(`<li><img src="${MEME_API_BASE + meme.link}"></li>`);
        // Attach event handlers
        li.click(function () {
          selectedMeme = meme.name;
          updateImage();
        });
        // And add it to the DOM
        list.append(li);
      });
    },
    error: () => {
      $('.meme-selection').html('<h2>Failed to load Meme-List</h2>');
    }
  });

  // Update the meme image
  function updateImage () {
    // If the user has selected an image
    if (selectedMeme) {
      // Construct the image URL
      const memeURL = MEME_API_BASE + '/memes/' +
        selectedMeme +
        '?text=' + text.val() +
        '&text2=' + text2.val() +
        '&x=' + x.val() +
        '&y=' + y.val() +
        '&x2=' + x2.val() +
        '&y2=' + y2.val();
      // And set the image source
      outputImage.attr('src', memeURL);
    }
  }

  // Update the meme when the user changes something
  $('.params input').change(updateImage);

  /**
   * Load a meme and all its parameters
   * @param meme The meme in the format of the PHP API
   */
  function loadMeme (meme) {
    selectedMeme = meme.image;
    text.val(meme.text);
    text2.val(meme.text2);
    x.val(meme.x);
    y.val(meme.y);
    x2.val(meme.x2);
    y2.val(meme.y2);
    updateImage();
  }

  // Load saved memes
  function loadSavedMemes (query) {
    memeList.empty();
    // Create Ajax call to your MemeAPI
    const url = /* TODO */;
    $.get(url, function (memes) {
      $.each(memes, function (i, meme) {
        const url = MEME_API_BASE + '/memes/' + meme.image +
          '?text=' + meme.text +
          '?text2=' + meme.text2 +
          '?x=' + meme.x +
          '?y=' + meme.y +
          '?x2=' + meme.x2 +
          '?y2=' + meme.y2;

        // TODO When you have retrieved the list of saved memes, add them to the list of memes in the sidebar
        // TODO When the list item is clicked, it should load that meme
      });
    });
  }
  loadSavedMemes();

  // Filter memes
  // When the user types in the aside input, reload the list of memes with the search query
  // TODO

  // Save new meme
  // When the user clicks the aside button, collect all the data for the POST request and send it to the POST endpoint
  // TODO
});
