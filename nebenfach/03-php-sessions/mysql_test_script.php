<?php
  $username = '<YOUR USERNAME>';
  $password = '<YOUR PASSWORD>';
  $db_name = '<YOUR DATABASE NAME>';
  $connection = mysqli_connect('localhost', $username, $password, $db_name);

  if (!$connection) {
    echo 'Error! Could not connect to database.';
    echo mysqli_connect_error();
  } else {
    echo 'Success! You are connected to your database: ' .  
      mysqli_get_host_info($connection);
  }
?>
