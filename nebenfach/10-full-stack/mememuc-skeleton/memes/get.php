<?php
  // Hint: This line imports the mock data script.
  // When this script is included, you can use the constant MOCK_DATA for some dummy values.
  require('../mock-data.php');



  function memes_get () {
    if (/* if the users has provided a search query */) {
      // User is searching for something
      $results = array();

      // TODO: Return only the elements that contain the query in their text.
      // Hint: Use stristr for case-insensitive string matching

      header('Content-Type: application/json');
      echo json_encode($results);
    } else {
      // No query -> dump everything
      // Usually this would be limited to only the first n results with pagination

      header('Content-Type: application/json');
      echo json_encode(/* TODO: Send the complete set of mock data */);
    }
  }
?>
