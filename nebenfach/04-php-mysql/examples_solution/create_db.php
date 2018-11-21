<?php

require_once('connectionInfo.php');

$c = mysqli_connect($connectionInfo['host'],
    $connectionInfo['user'],
    $connectionInfo['password']);

if ($c) {
    echo "<div>Connection has been successfully established</div>";
} else {
    die("<div>Could NOT connect to database</div>");
}

$query = "CREATE DATABASE IF NOT EXISTS mmn";
$result = mysqli_query($c, $query);

if (!$result) {
    echo mysqli_error($c);
} else {
    echo "<div>Database was created</div>";
}

?>
