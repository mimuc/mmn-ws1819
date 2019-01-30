<?php
  require('./get.php');
  require('./post.php');

  $method = 'TODO: Get the HTTP Method';

  if ($method === 'GET') {
    memes_get();
  } else if ($method === 'POST') {
    memes_post();
  } else {
    http_response_code(405);
    header('Content-Type: application/json');
    echo '{ "error": "Method not allowed" }';
    exit();
  }
?>
