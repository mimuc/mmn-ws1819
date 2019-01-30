window.addEventListener('DOMContentLoaded', () => {
  const tests = [
    { method: 'GET', url: 'memes/', validator: (data) => data[1].image === 'boromir' },
    { method: 'GET', url: 'memes/?q=meme', validator: (data) => data[0].image === 'doge' },
    { method: 'POST', url: 'memes/', body: {
      image: 'raptor',
      text: 'If I send a POST request',
      text2: 'Can the server GET it?',
    }, validator: (data) => data.length === 3 },
  ];

  function initTests () {
    const results = $('.test-results')
    results.empty();

    tests.forEach((test) => {
      const li = $('<li/>');
      li.append($(`<code>${test.method} ${location.pathname}${test.url}</code>`));

      const indicator = $('<img src="img/loading.svg">');
      li.append(indicator);
      li.appendTo(results);

      $.ajax({
        type: test.method,
        url: test.url,
        contentType: 'application/json',
        data: JSON.stringify(test.body || null),
        dataType: 'json',
        success: (data) => {
          if (!test.validator || test.validator(data)) {
            li.addClass('success');
            indicator.replaceWith($('<i>&#10003;</i>'))
          } else {
            li.addClass('failure');
            indicator.replaceWith($('<i>&#10007;</i>'))
          }
        },
        error: (err) => {
          li.addClass('failure');
          indicator.replaceWith($('<i>&#10007;</i>'))
          li.attr('title', `${err.status} ${err.statusText}`);
          li.append(`<div>${err.responseText}</div>`);
        },
      });
    });
  }

  initTests()
  $('button').on('click', initTests);
});
