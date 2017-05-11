'use strict';

document.getElementById('Answer1').innerHTML = "Does David have pets? Your guess: " + pets + " Correct answer: Yes";
document.getElementById('Answer2').innerHTML = "Does David have a cat? Your guess: " + petType + " Correct answer: No";
document.getElementById('Answer3').innerHTML = "Does David walk to class? Your guess: " + home + " Correct answer: Yes";
document.getElementById('Answer4').innerHTML = "Does David walk his dog at lunch? Your guess: " + lunch + " Correct answer: Yes";
document.getElementById('Answer5').innerHTML = "Is David working while taking Code 201? Your guess: " + work + " Correct answer: No";
document.getElementById('Answer6').innerHTML = "How many household pets has David had? Your guesses: " + guessesArray.toString() + " Correct answer: 6";
document.getElementById('Answer7').innerHTML = "Besides Seattle, in which cities has David been to a MLB game? Your guesses: " + baseballArray.toString() + " Correct answers: " + citiesBaseball.toString();
