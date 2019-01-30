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
      $.each(memes, function (i, meme) {
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
    const url = PHP_API_BASE + '/memes/' + (query ? '?q=' + query : '');
    $.get(url, function (memes) {
      $.each(memes, function (i, meme) {
        // When you have retrieved the list of saved memes, add them to the list of memes in the sidebar
        const url = MEME_API_BASE + '/memes/' + meme.image +
          '?text=' + meme.text +
          '&text2=' + meme.text2 +
          '&x=' + meme.x +
          '&y=' + meme.y +
          '&x2=' + meme.x2 +
          '&y2=' + meme.y2;

        const li = $('<li><img src="' + url + '"></li>');

        li.click(function () {
          loadMeme(meme);
        });
        memeList.append(li);
      });
    });
  }

  loadSavedMemes();

  // Filter memes
  $('aside input').change(function () {
    const input = $(this);
    loadSavedMemes(input.val());
  });

  // Save new meme
  $('aside button').click(function () {
    const data = {
      text: text.val(),
      text2: text2.val(),
      x: x.val(),
      y: y.val(),
      x2: x2.val(),
      y2: y2.val(),
    };

    $.ajax({
      url: PHP_API_BASE + '/memes/',
      datatype: 'json',
      data: JSON.stringify(data),
      method: 'POST',
      success: loadSavedMemes,
    });
  });
});
