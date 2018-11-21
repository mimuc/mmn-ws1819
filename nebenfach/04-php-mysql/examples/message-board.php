<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">
    <title>Message Board</title>
    <style>
        body {
            font: 12pt Arial, sans-serif;
            background-color: #eee;
        }

        label, input, textarea {
            display: block;
            width: 100%;
            margin-bottom: 5px;
        }

        #formContainer {
            margin: auto;
            width: 80%;
            border-radius: 10px;
            background-color: dodgerblue;
            color: white;
            padding: 16px;
        }
        .message {
            background-color: white;
            border-radius: 10px;
            padding: 16px;
            margin: 16px 0;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body>

<?php

$connectionInfo = array(
    "host" => "localhost",
    "user" => "root",
    "password" => "",
    "db" => "mmn1617"
);

include_once('connectionInfo.private.php'); // TODO uncomment this.

// connect to the database
$c = mysqli_connect($connectionInfo['host'],
    $connectionInfo['user'],
    $connectionInfo['password'],
    $connectionInfo['db']
);


// first create the table for the messages, if it doesn't exist
$createTableQuery = "CREATE TABLE IF NOT EXISTS messages 
                    (`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
                     `name` VARCHAR(20) NOT NULL DEFAULT 'anonymous', 
                     `message` TEXT NOT NULL)";

$createTableResult = mysqli_query($c, $createTableQuery);
if (!$createTableResult) {
    echo '<div>Could not create messages table</div>';
}


$alterTableQuery = "ALTER TABLE messages ADD title VARCHAR(512)";
$horst = mysqli_query($c, $alterTableQuery);
if ($horst) {
    echo "<div> ALTER TABLE worked.  </div>";
} else {
    // echo mysqli_error($c);
}



if (isset($_POST['name']) && isset($_POST['message'])) {
    $name = $_POST['name'];
    $message = $_POST['message'];
    $title = $_POST['title'];

    if (strlen($message) > 0) {
        $insertMessageQuery = "INSERT INTO messages 
            (name,message,title) VALUES 
            ('$name','$message','$title')";
        $insertResult = mysqli_query($c,
                            $insertMessageQuery);
        if ($insertResult) {
            echo "<div class='success'>
                    Message successfully inserted</div>";
        }
    } else {
        echo "<div>Error: please enter a message</div>";
    }
}
?>

<div id="formContainer">
    <form method="post">
        <label>Your Name: <input type="text" name="name"></label>

        <label>Title: <input type="text" name="title"></label>
        <label>Message: <textarea name="message" required></textarea></label>

        <input type="submit" name="submit" value="Save your message."/>
    </form>
</div>

<?php
$selectMessagesQuery = "SELECT * FROM messages ORDER BY `id` DESC";
$messagesResult = mysqli_query($c, $selectMessagesQuery);

while ($message = mysqli_fetch_assoc($messagesResult)) {
    echo "<div class='message'>";
    echo "<h2>{$message['name']}</h2>";
    echo "<h3>{$message['title']}</h3>";
    echo "<div>{$message['message']}</div>";
    echo "</div>";
}

?>

</body>
</html>