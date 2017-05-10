'use strict';

/* var correctAnswers = 0;

var userName = prompt('What\'s your name?');
alert('Hello ' + userName + ', I\'m going to ask you a few questions. The first five are yes/no questions.');

var petsArray = [];
do{
  var pets = prompt('Does David have any pets?').toUpperCase();

  if (pets === 'YES' || pets === 'Y'){
    alert('You\'re right! He does have a pet.');
    ++correctAnswers;
  } else if (pets === 'NO' || pets === 'N'){
    alert('Actually, he does have a pet.');
  } else {
    alert('That\'s not a yes or no answer! Try again.');
    petsArray.push(pets);
  }
} while (pets !== 'YES' && pets !== 'Y' && pets !== 'NO' && pets !== 'N');
console.log('Pets Guess: ', pets);
console.log('Not Y/N: ', petsArray);

var petTypeArray = [];
do{
  var petType = prompt('Does David have a cat?').toUpperCase();

  if(petType === 'YES' || petType === 'Y'){
    alert('Wrong, David has a dog.');
  } else if (petType === 'NO' || petType === 'N'){
    alert('You\'re right! David has a dog, not a cat.');
    ++correctAnswers;
  } else {
    alert('Just answer yes or no, you\'re better than this.');
    petTypeArray.push(petType);
  }
} while(petType !== 'YES' && petType !== 'Y' && petType !== 'NO' && petType !== 'N');
console.log('David has cat: ', petType);
console.log('Not Y/N: ', petTypeArray);

var homeArray = [];
do{
  var home = prompt('Does David walk to class each day?').toUpperCase();

  if (home === 'YES' || home === 'Y'){
    alert('Right you are, but he only lives two blocks away so it\'s not that impressive.');
    ++correctAnswers;
  } else if(home === 'NO' || home === 'N'){
    alert('Actually he does walk to class, but he only lives two blocks away.');
  } else {
    alert('By now you should know these are yes/no questions. Let\'s try this again.');
    homeArray.push(home);
  }
} while(home !== 'YES' && home !== 'Y' && home !== 'NO' && home !== 'N');
console.log('Walks to class: ', home);
console.log('Not Y/N: ', homeArray);

var lunchArray = [];
do{
  var lunch = prompt('Does David walk his dog during his lunch hour?').toUpperCase();

  if (lunch === 'YES' || lunch === 'Y'){
    alert('Well he usually does. Sometime his dog goes to daycare.');
    ++correctAnswers;
  } else if (lunch === 'NO' || lunch === 'N'){
    alert('He actually walks his dog most days during the lunch hour. Occasionally his dog goes to daycare for the whole day.');
  } else {
    alert('Just yes or no please.')
    lunchArray.push(lunch);
  }
} while (lunch !== 'YES' && lunch !== 'Y' && lunch !== 'NO' && lunch !== 'N');
console.log('Walks dog at lunch: ', lunch);
console.log('Not Y/N: ', lunchArray);

var workArray = [];
do{
  var work = prompt('Is David still working while he takes Code 201?').toUpperCase();

  if (work === 'YES' || work === 'Y'){
    alert('There\'s no way David could work while taking classes from 9am to 6pm.');
  } else if (work === 'NO' || work === 'N'){
    alert('You\'re right, he took the month off from work to learn code!');
    ++correctAnswers;
  } else {
    alert('This is the fifth question, you should have it figured out by now.');
    workArray.push(work);
  }
} while (work !== 'YES' && work !== 'Y' && work !== 'NO' && work !== 'N');
console.log('Not Y/N: ', work);
console.log('David working now: ', workArray);

console.log('Correct Answers: ', correctAnswers);
alert('In the end, you got ' + correctAnswers + ' out of 5 correct. But how were you supposed to know any of this anyways?');
*/
var guessesArray = [];
var numberOfPetsGuess = prompt('How many household pets has David had in his lifetime?');
guessesArray.push(numberOfPetsGuess);
var numberOfPetsActual = 6;
var counter = 1;

do{
  if (numberOfPetsGuess<numberOfPetsActual){
    numberOfPetsGuess = prompt('Too low, guess higher.');
    counter++;
    guessesArray.push(numberOfPetsGuess);
  } else if (numberOfPetsGuess>numberOfPetsActual){
    numberOfPetsGuess = prompt('Too high, guess lower.');
    counter++;
    guessesArray.push(numberOfPetsGuess);
  } else if (isNaN(numberOfPetsGuess)){
    numberOfPetsGuess = prompt('Enter a number please.');
    counter++;
    guessesArray.push(numberOfPetsGuess);
  }
} while (numberOfPetsGuess !== numberOfPetsActual && counter < 4);

if(numberOfPetsGuess === numberOfPetsActual){
  alert('You\'re right! He\'s had two dogs and four cats over the years. But three of the cats belonged to his sister.');
}
if(counter === 1){
  alert('You got it on your first guess!')
} else if(counter === 4 && numberOfPetsGuess !== numberOfPetsActual){
  alert('Sorry, you only get four guesses.');
} else {
  alert('It only took you ' + counter + ' guesses!');
}
console.log('Number of Guesses: ', counter);
console.log('Guesses: ', guessesArray);
