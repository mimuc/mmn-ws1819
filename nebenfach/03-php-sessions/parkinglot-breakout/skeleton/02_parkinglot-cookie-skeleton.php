<?php
$max_number_of_cars = 6;

// If there doesn't exist a cookie with the number of cars
if (/* TODO */){
  // Set number of cars to zero
  $number_of_cars = 0;
}
else {
  // $number_of_cars_before is the number of cars stored in the cookie
  $number_of_cars_before = /* TODO */;
  $number_of_cars = $number_of_cars_before;

  // The user has clicked the increment button
  if (isset($_POST['increment'])) {
    // Increment the car counter
    /* TODO */
  }
  // The user has clicked the decrement button
  else if (isset($_POST['decrement'])) {
    // Decrement the car counter
    /* TODO */
  }
}
// Set or modify a cookie with the current number of cars
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
  // Get the number of cars from the cookie

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
?>
  <form action="#" method="POST">
    <!-- TODO disable the buttons when the parking lot is full/empty -->
    <input type="submit" name="increment" value="+">
    <input type="submit" name="decrement" value="-">
  </form>
  </body>
</html>
