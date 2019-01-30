<?php

// This function is used to transform the a JSON object sent by the client into an (php) object

  function request_json_data () {
    try {
      $body = file_get_contents('php://input');
      $request_data = json_decode($body);
    } catch (Exception $e) {
      return false;
    }

    if (
      !isset($request_data) ||
      is_null($request_data) ||
      empty($request_data)
    ) {
      return false;
    } else {
      return $request_data;
    }
  }

?>
