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

// $_POST is a superglobal array (accessible everywhere) containing all the form data submitted via POST
// It is an associative array with the names of the values as keys (see below)
if (isset($_POST['cars'])) {

  // Get the number of cars from the form
  $number_of_cars = $_POST['cars'];

  // There is only room for 6 cars
  if ($number_of_cars > 6) {
    $number_of_cars = 6;
    echo '<h2>Sorry, the parking lot is full</h2>';
  }

  // Start of the cars container
  echo '<div class="cars">';

  // For as many cars as there are, create an empty
  // div `<div></div>` that represents the car
  // Styling and animation is done in parkinglot.css. Interesting, but not part of this tutorial.
  for ($i = 0; $i < $number_of_cars; $i++) {
      echo '<div></div>';
  }

  // End of the cars container
  echo '</div>';
}
?>
    <!-- Insert the HTTP method
    name="cars" means the value is accessible with "cars" as key in the $_POST array
    type="number" allows only numbers to be enter
    placeholder defines a text appearing at the beginning-->
    <form action="#" method="POST">
      <input name="cars" type="number" placeholder="Number of cars...">
      <!-- When the submit button is pressed, the form is sent to the server -->
      <input type="submit">
    </form>
  </body>
</html>
