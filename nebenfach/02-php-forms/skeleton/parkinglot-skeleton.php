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
if (/* TODO */) {

  // Get the number of cars from the form
  $number_of_cars = /* TODO */;

  // Start of the cars container
  echo '<div class="cars">';

  // For as many cars as there are, create an empty
  // div `<div></div>` that represents the car.

  /* TODO */


  // End of the cars container
  echo '</div>';
}
?>
    <!-- Insert the HTTP method -->
    <form action="#" method="TODO">
      <input name="cars" type="number" max="6" min="0" placeholder="Number of cars...">
      <input type="submit">
    </form>
  </body>
</html>
