<?php
  require_once('../mock-data.php');

  function memes_post () {
    global $mock_data;

    $request_data = request_json_data();

    if ($request_data) {
      // Since this is userdata, we would have to do some extensive
      // sanitising here to prevent security issues. We skip that.

      // TODO insert the submitted data into the dataset ($mock_data)

      http_response_code(/* TODO correct response code */);
      header(/* TODO correct MIME type */);
      echo '{ "success": true, "length": ' . count($mock_data) . ' }';

    } else {
      http_response_code(400);
      header('Content-Type: application/json');
      echo '{ "error": "Invalid JSON in request body." }';
    }
  }
?>
