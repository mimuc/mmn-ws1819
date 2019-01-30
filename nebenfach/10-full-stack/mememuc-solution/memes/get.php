<?php
  // Import the mock-data
  require('../mock-data.php');

  // Handle all get-requests: We want to return/echo all memes containing the
  // query text from the request to the API, stored in the parameter q
  function memes_get () {
    // Making $mock_data global, so it's accessible from within functions
    global $mock_data;

    // If the user is searching for something, so GET-parameter q is not empty
    if (isset($_GET['q']) && !empty($_GET['q'])) {
      // The results are stored in an (intially empty) array
      $results = array();

      // $mock_data is an array containing memes (more exact: meme data sets) as associative arrays,
      // so here we are looping through $mock_data to process each meme
      foreach ($mock_data as $meme) {
        // If text or text2 of the meme (upper or lower text) contains the query parameter
        if (
          stristr($meme['text'], $_GET['q']) ||
          stristr($meme['text2'], $_GET['q'])
        ) {
          // Add the meme to the results array
          $results[] = $meme;
        }
      }

      // We want to return the results as JSON, so we set a header of our
      // http-response, which tells the client to expect JSON data
      header('Content-Type: application/json');
      // Transform $results into JSON and send it to the client
      echo json_encode($results);
    } else {
      // No query -> dump everything
      // Usually this would be limited to only the first n results with pagination
      header('Content-Type: application/json');
      echo json_encode($mock_data);
    }
  }
?>
