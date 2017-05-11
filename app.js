'use strict';

var correctAnswers = 0;

var userName = prompt('What\'s your name?');
alert('Hello ' + userName + ', I\'m going to ask you a few questions. The first five are yes/no questions.');


function questionOne() {

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
}

function questionTwo() {

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
}

function questionThree() {

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
}

function questionFour() {

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
}

questionOne();
questionTwo();
questionThree();
questionFour();




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
console.log('David working now: ', work);
console.log('Not Y/N: ', workArray);

var guessesArray = [];
var numberOfPetsActual = 6;
var counter = 1;
var petflag = false;

do{
  var numberOfPetsGuess = prompt('How many household pets has David had in his lifetime?');
  counter++;
  if (numberOfPetsGuess<numberOfPetsActual){
    alert('Too low, guess higher.');
  } else if (numberOfPetsGuess>numberOfPetsActual){
    alert('Too high, guess lower.');
  } else if (isNaN(numberOfPetsGuess) || numberOfPetsGuess === null){
    alert('Enter a number please.');
  }
  guessesArray.push(numberOfPetsGuess);
  console.log(counter);
} while (parseInt(numberOfPetsGuess) !== numberOfPetsActual && counter < 5)

if (parseInt(numberOfPetsGuess) === numberOfPetsActual){
  alert('You\'re right! He\'s had two dogs and four cats over the years. But three of the cats belonged to his sister.');
  correctAnswers++;
} else {
  alert('Sorry you only get four guesses.');
}

console.log('Number of Guesses: ', counter);
console.log('Guesses: ', guessesArray);

var citiesBaseball = ['New York', 'Chicago', 'Detroit', 'St. Louis', 'San Fransisco', 'Milwaukee', 'Baltimore', 'Boston'];
var baseballArray = [];
var flag;
var counterTwo = 0;

while(!flag){
  var cityGuess = prompt('Besides Seattle, name a city in which David has gone to a MLB game.').toUpperCase();
  counterTwo++
  baseballArray.push(cityGuess);
  for(var j=0;j<citiesBaseball.length;j++){
    console.log('Current guess: ', cityGuess);
    if (cityGuess === citiesBaseball[j].toUpperCase()){
      alert('You\'re right!');
      correctAnswers++;
      flag = true;
      break;
    } else if (counterTwo === 6){
      alert('Sorry, you only get 6 guesses.');
      flag = true;
      break;
    }
  }
}

var citiesBaseballString = citiesBaseball.toString();
alert('You could have chosen from any of these cities: ' + citiesBaseballString);
console.log('Correct Answers: ', correctAnswers);
alert('In the end, you got ' + correctAnswers + ' out of 7 correct, ' + userName + '. But how were you supposed to know any of this anyways?');
