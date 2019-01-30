<?php

/*
	This is the main page for the api, accessible via /memes (or /memes/index.php).
  The only thing happening here is directing GET- and POST-requests to the methods
	defined in get.php and post.php. Other requests are rejected with an error code and message.
*/
  require('./get.php');
  require('./post.php');

  $method = $_SERVER['REQUEST_METHOD'];

  // Makes sure, requests from other domains are allowed; necessary for accessing the API from the client
  header("Access-Control-Allow-Origin: *");

  if ($method == 'GET') {
    memes_get();
  } else if ($method == 'POST') {
    memes_post();
  } else {
    http_response_code(405);
    header('Content-Type: application/json');
    echo '{ "error": "Method not allowed" }';
    exit();
  }
?>
