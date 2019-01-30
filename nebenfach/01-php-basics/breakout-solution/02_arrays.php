<!DOCTYPE html>
<html>
<head>
	<meta charset="utf8">
	<title>MMN - Tutorial 02 Minor - Arrays</title>
</head>
<body>
	<!-- This is a HTML comment, they are different than PHP comments (//) -->
	<!-- <ul> creates an unorderd list -->
	<ul>
		<?php
		// Create an arbitrary array
		$arr = array(4, 35, -56, 0, 6, 3, 1, 1, 7, 456, 3452345, 6, 3, -2, -7 -234, 321, 654, 987, 1, 0, -1);
		// Initialize a variable with the length of the array, so we don't have to write count($arr) all the time
		$arrLength = count($arr);

		// If the array has 10 or less elements, define a (string) variable $color with the value green
		if($arrLength <= 10){
			$color = "green";
		}
		// And so on for the other lengths...
		else if($arrLength <= 20){
			$color = "yellow";
		}
		else if($arrLength <= 30){
			$color = "orange";
		}
		else if($arrLength <= 40){
			$color = "red";
		}

		// Loop through the array, here done with foreach
		// The error in the tutorial was the missing "&" before "$value"
		// "&" is used to assign a variable as a reference, not as a copy, the normal way in php
		// It is nescessary here, because we want to change the original variables in the array and not only copies
		// If you don't want to alter the array values, don't use &
		// See http://php.net/manual/en/control-structures.foreach.php and
		// http://php.net/manual/en/language.references.php for more information
		foreach ($arr as &$value) {
			// Double every $value
			$value = $value * 2;
			// Print out a new list element (<li>)
			// Second part of the string (appended with "."): use span as a HTML-Tag for styling $value
			// "style" is used to apply CSS here, in this case the attribute "color"
			// with the attribute of the variable $color from above
			echo "<li>Value: " . "<span style='color:$color'>$value</span>" . "</li>";
		}

		// Alternative solution with normal for-loop
		/* for ($i = 0; $i < $arrLength; $i++) {
			$arr[$i] = $arr[$i] * 2;
			echo "<li>Value: " . "<span style='color:$color'>$arr[$i]</span>" . "</li>";
		} */
		?>
	</ul>
</body>
</html>
