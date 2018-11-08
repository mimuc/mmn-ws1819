<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf8">
    <title>MMN - Tutorial 02 Minor - Parking Lot</title>
    <link rel="stylesheet" href="parkinglot.css">
  </head>
  <body>
    <div class="parking-spots"><div></div><div></div><div></div><div></div><div></div><div></div></div>
<?php
// If the form is submitted
if (isset($_POST['cars'])) {

  // Get the number of cars from the form
  $number_of_cars = $_POST['cars'];

  if ($number_of_cars > 6) {
    $number_of_cars = 6;
    echo '<h2>Sorry, the parking lot is full</h2>';
  }

  // Start of the cars container
  echo '<div class="cars">';

  // For as many cars as there are, create an empty
  // div `<div></div>` that represents the car.
  for ($i = 0; $i < $number_of_cars; $i++) {
      echo '<div></div>';
  }

  // End of the cars container
  echo '</div>';
}
?>
    <!-- Insert the HTTP method -->
    <form action="#" method="POST">
      <input name="cars" type="number" placeholder="Number of cars...">
      <input type="submit">
    </form>
  </body>
</html>
