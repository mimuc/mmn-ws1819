<?php
  require_once('../mock-data.php');
  require_once('../helper.php');
  require_once('../db.php');

  function memes_post () {
    global $mock_data;
    global $connection;

    $request_data = request_json_data();

    if ($request_data) {
      // Sanitize the user input using mysqli_real_escape_string
      $image = mysqli_real_escape_string($connection, $request_data->image ?: 'doge');
      $text = mysqli_real_escape_string($connection, $request_data->text) ?: '';
      $x = mysqli_real_escape_string($connection, $request_data->x) ?: 0;
      $y = mysqli_real_escape_string($connection, $request_data->y) ?: 0;
      $text2 = mysqli_real_escape_string($connection, $request_data->text2) ?: '';
      $x2 = mysqli_real_escape_string($connection, $request_data->x2) ?: 0;
      $y2 = mysqli_real_escape_string($connection, $request_data->y2) ?: 0;

      $query = "INSERT INTO `memes` (`image`, `text`, `x`, `y`, `text2`, `x2`, `y2`) VALUES ('$image', '$text', $x, $y, '$text2', $x2, $y2)";
      mysqli_query($connection, $query);


      if (!$err = mysqli_error($connection)) {
        http_response_code(201);
        header('Content-Type: application/json');
        echo '{ "success": true, "length": ' . count($mock_data) . ' }';
      } else {
        http_response_code(500);
        header('Content-Type: application/json');
        echo '{ "error": "' . $err . '" }';
      }

    } else {
      http_response_code(400);
      header('Content-Type: application/json');
      echo '{ "error": "Invalid JSON in request body." }';
    }

  }
?>
