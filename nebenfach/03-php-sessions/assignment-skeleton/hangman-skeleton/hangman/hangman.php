<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hangman</title>
    <meta name="author" content="Tobias Seitz">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="hangman.css">
</head>
<body>

<div id="container">
    <h2>Hangman - the game.</h2>
    <section id="output">
        <?php

        $secretWord = 'MultimediaImNetz';
        $wordLength = -1; // TODO use a function to dermine how long $secretWord is.

        // how many attempts does the user get to solve the problem?
        $maximumAttempts = 12; // you can change this if you like


        // reset the guesses.
        // TODO make sure that the form was submitted with the 'reset' button
        // TODO reset the entire session as shown in the tutorial.
        if ('change'=='this') {
            // your code here.
        }

        // actually initialize the session variables
        // valid and invalid attempts.
        if (!isset($_SESSION['hits']) || !isset($_SESSION['misses'])) {
            $_SESSION['hits'] = ''; // TODO think of a data type to store the characters that were *correct* and initialize this variable.
            $_SESSION['misses'] = ''; // TODO think of a data type to store the characters that were *wrong* and initialize this variable.
        }


        // handle a valid guess.
        // TODO make sure that the user submitted the form with the 'guess' button (and not with the reset button)
        if ('change'=='this') { // TODO add the correct condition.

            // this makes sure the letter is always uppercase.
            $letter = strtoupper($_POST['letter']);

            // determine if the $secretWord contains the $letter.
            if ('change'=='this') { // TODO replace the condition. It should check whether $secretWord contains $letter.
                // save the letter in the 'hits' list;
                $_SESSION['hits'][$letter] = true;
            } else {
                // save the letter in the 'misses' list;
                $_SESSION['misses'][$letter] = true;
            }
        }

        //
        // at this point, we know the hits and the misses, they are stored in $_SESSION['hits'] and $_SESSION['misses']


        // we want to know how far we have progressed in the game, to show the correct image (hangmanXX.png).
        // the first image would be hangman01.png.
        // So, the number we need to include here (hangman{HERE}.png) depends on the number of _misses_!
        $progress = count($_SESSION['misses']); // TODO count the number of misses.
        // please note: the first image is hangman01.png (not hangman00.png).
        $progress = $progress + 1;


        // now let's construct the name of the image.
        $imageName = 'hangman';

        // determine which of the 12 hangman files we pick.
        // TODO complete the image name.
        // TODO if the progress is below 10, we need to prefix a '0' to the number.



        // TODO show the image:
        echo "??? image ???";

        // reveal the letters inside the 'result' div.
        echo '<div class="result">';
        // if the progress is smaller than a predefined number of attempts ==> we can play on.
        // TODO check if the player is allowed to guess
        if ('change'=='this') {

            // now we want to show which letters have been guessed correctly.
            // of course, we want to show the correct letters at the correct position inside $secretWord.
            // we go through each letter of the secret word and see if it's a hit or a miss.
            for ($i = 0; $i < $wordLength; $i++) {

                // make sure we use the uppercase version of the letters.
                $charAtI = strtoupper('???'); // TODO get the letter at position $i of $secretWord inside strtoupper(...)

                // TODO case 1: the letter of the word is in the guess array --> reveal the letter
                // TODO case 2: the letter was not guessed yet --> show an underscore _
                // your code here
            }

            // TODO: Optional: to be a little more usable, show which letters were wrong. They should be in $_SESSION['misses'].
            // your code here.

        } else { // oh no, the user lost!
            // TODO show a message to the user and inform him/her that the game is lost.

            // TODO destroy the session --> restart the game. 

        }

        echo '</div>'; # .result
        ?>
    </section>
    <section id="formContainer">
        <!-- we transmit the data via POST, but GET would also be fine in this case. -->
        <form method="post" action="hangman.php">
            <!-- minlength and maxlength make sure that the user enters exactly one letter -->
            <input type="text" maxlength="1" minlength="1" name="letter"/>
            <!-- please not: it is possible to have two "submit" buttons. All that matters is that they have different "name" attributes.
            This allows us to check which of the buttons was clicked -->
            <button type="submit" name="guess">Guess</button>
            <button type="submit" name="reset">Reset</button>
        </form>
    </section>
</div>

</body>
</html>