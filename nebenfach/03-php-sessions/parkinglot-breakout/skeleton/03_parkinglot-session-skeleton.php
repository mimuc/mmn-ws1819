<?php
  // Start the session
  /* TODO */

  // Initialize the car counter if it is not set yet
  /* TODO */
  ?>
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
  $max_number_of_cars = 6;
  // Get the number of cars from the session
  $number_of_cars_before = /* TODO */;
  $number_of_cars = $number_of_cars_before;

  if (isset($_POST['increment'])) {
    // Increment the car counter
    /* TODO */
  } else if (isset($_POST['decrement'])) {
    // Decrement the car counter
    /* TODO */
  }

  // Start of the cars container
  echo '<div class="cars">';

  // For as many cars as there are, create a div
  // With class "parked" for every car that was here
  // before and an empty div for new cars
  for ($i = 0; $i < $number_of_cars; $i++) {
    if ($i < $number_of_cars_before) {
      /* TODO */

    } else {
      /* TODO */
    }
  }

  // End of the cars container
  echo '</div>';

  // Store the new number of cars in the session
  /* TODO */
?>
    <form action="#" method="POST">
      <!-- TODO disable the buttons when the parking lot is full/empty -->
      <input type="submit" name="increment" value="+">
      <input type="submit" name="decrement" value="-">
    </form>
  </body>
</html>
