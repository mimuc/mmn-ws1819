<?php

require_once('connectionInfo.php');

$c = mysqli_connect($connectionInfo['host'],
    $connectionInfo['user'],
    $connectionInfo['password'],
    $connectionInfo['db']
    );
/*
 * here's a query that creates a table "Contacts"
 * if it does not exist already.
 * The table contains
 *  a PersonID (the primary key which
 *  will be automatically incremented)
 *
 *  a First Name as String (called VARCHAR in SQL)
 *  a Last Name as String
 *  a Phone Number as String (we don't use INT because of formatting)
 */
$createContactsQuery = "CREATE TABLE IF NOT EXISTS Contacts (
  PersonID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  FirstName VARCHAR(255) NOT NULL,
  LastName VARCHAR(255) NOT NULL,
  PhoneNumber VARCHAR(20) NOT NULL
)";


/*
 * we execute the query here.
 * the result is returned to the $tableCreationResult
 */
$tableCreationResult = mysqli_query($c,$createContactsQuery);
// tableCreationResult will be "true" if the query was successful
// we only continue to insert data if the query was successful
if($tableCreationResult){
    // Note: The query doesn't contain the PersonID, because
    // it will be automatically created by MySQL
    $insertContactsQuery = "INSERT INTO Contacts (FirstName, LastName, PhoneNumber)
      VALUES ('Max', 'Mustermann', 089776557)";

    // let's run the query.
    $insertResult = mysqli_query($c,$insertContactsQuery);
    // this syntax (read. "if no result") is very common.
    if(!$insertResult) {
        echo "<p>Failed to insert data into the contact table</p>";
    }
    else {
      echo "Success!";
    }
}
else{ // the $createContactsQuery somehow failed.
    echo "<p>Failed to create table</p>";
}
/*
 * another example to read and show the contacts.
 */
$fetchContactsQuery = "SELECT * FROM Contacts";
// the result is not a Boolean anymore, if the query was successful
// instead, we now use the result to fetch each contact
$contactsResult = mysqli_query($c,$fetchContactsQuery);
// this is the usual way to fetch a row from a result set
// if there are some rows left in the $contactsResult
// then $contact will be an associative array, where
// the keys are the names of the Columns, e.g. PersonID, FirstName, ...
echo "<table>";
while($contact = mysqli_fetch_assoc($contactsResult)){
    $personID = $contact['PersonID'];
    $firstName = $contact['FirstName'];
    $lastName = $contact['LastName'];
    $phoneNumber = $contact['PhoneNumber'];
    // echo "$firstName $lastName $phoneNumber <br />";
    echo "<tr>
                <td>$personID</td>
                <td>$firstName</td>
                <td>$lastName</td>
                <td>$phoneNumber</td>
          </tr>";
}
echo "</table>";
?>
