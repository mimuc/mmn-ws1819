<?php

$indexedArray = array(1,2,3,4);

// pushing values can be done like this
$indexedArray []= 5;

// or this
array_push($indexedArray,6);

// and this is how you replace/add elements
$indexedArray[1] = 20;

// get array length:
echo '<p>$indexedArray contains ' . count($indexedArray) . ' entries.</p>';

// entries can have any type:
$indexedArray []= 'omg a string!';

// print some info about variables:
var_dump($indexedArray);

echo "<br />";

$associativeArray =
    array("apples"=>"1","bananas"=>4);

$associativeArray["apples"] = 1;
$associativeArray["bananas"] = 4;

var_dump($associativeArray);
