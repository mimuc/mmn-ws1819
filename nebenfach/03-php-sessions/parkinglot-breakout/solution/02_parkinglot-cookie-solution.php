<?php
$carNoID = "number_of_cars";

$max_number_of_cars = 6;

// Initialize the car counter if it is not set yet
if (! isset($_COOKIE[$carNoID])){
  $number_of_cars = 0;
} else {
  $number_of_cars_before = $_COOKIE[$carNoID];
  $number_of_cars = $number_of_cars_before;
  if (isset($_POST['increment'])) {
    // Increment the car counter
    if($number_of_cars < $max_number_of_cars) {
      $number_of_cars++;
    }
  } else if (isset($_POST['decrement'])) {
    // Decrement the car counter
    if($number_of_cars > 0){
      $number_of_cars--;
    }
  }
}
setcookie($carNoID, $number_of_cars);
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
      echo "<div class='parked'></div>";
    } else {
      echo "<div></div>";
    }
  }

  // End of the cars container
  echo '</div>';
?>
  <form action="#" method="POST">
    <!-- TODO disable the buttons when the parking lot is full/empty -->
    <input type="submit" name="increment" value="+" <?php
    if ($number_of_cars == $max_number_of_cars) {
      echo "disabled";
    } ?> >
    <input type="submit" name="decrement" value="-" <?php
    if ($number_of_cars == 0) {
      echo "disabled";
    } ?> >
  </form>
  </body>
</html>
