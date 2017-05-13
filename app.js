'use strict';

var correctAnswers = 0;

var userName = prompt('What\'s your name?');
alert('Hello ' + userName + ', I\'m going to ask you a few questions. The first five are yes/no questions.');

var questionArray = ['Does David have any pets?','Does David have a cat?','Does David walk to class each day?','Does David walk his dog during his lunch hour?','Is David still working while he takes Code 201?'];
var correctAnswerArray = [['Y','N','Y','Y','N'],['YES','NO','YES','YES','NO']];
var correctResponseArray = ['You\'re right! He does have a pet.','You\'re right! David has a dog, not a cat.','Right you are, but he only lives two blocks away so it\'s not that impressive.','Well he usually does. Sometime his dog goes to daycare.','You\'re right, he took the month off from work to learn code!'];
var incorrectResponseArray = ['Actually, he does have a pet.','Wrong, David has a dog.','Actually he does walk to class, but he only lives two blocks away.','He actually walks his dog most days during the lunch hour. Occasionally his dog goes to daycare for the whole day.','There\'s no way David could work while taking classes from 9am to 6pm.'];
var userAnswerArray = [];

function askYNQuestion(qArr, corrArr, corrResp, incoResp){
  var userAnsReturn = [];
  for (var i=0; i<qArr.length; i++){
    do{
      var userAnswer = prompt(qArr[i]).toUpperCase();

      if (userAnswer !== 'Y' && userAnswer !== 'YES' && userAnswer !== 'N' && userAnswer !== 'NO'){
        alert('Please respond only with a yes or no.');
      } else if (userAnswer === corrArr[0][i] || userAnswer === corrArr[1][i]){
        alert(corrResp[i]);
        correctAnswers++;
      } else {
        alert(incoResp[i]);
      }
    } while (userAnswer !== 'YES' && userAnswer !== 'Y' && userAnswer !== 'NO' && userAnswer !== 'N');
    console.log('User Answer: ', userAnswer);
    userAnsReturn.push(userAnswer);
  }
  alert('You answered ' + correctAnswers + ' out of ' + qArr.length + ' correctly!');
  return userAnsReturn;
}

var hopeThisWorks = askYNQuestion(questionArray, correctAnswerArray, correctResponseArray, incorrectResponseArray);
console.log(hopeThisWorks.join(', '));

function askNumQuestion (askNum, corrNum, corrNumResponse, attemptsNum){
  var ansNumReturn = [];
  var attemptsRemaining = attemptsNum;
  for (var a=0; a<attemptsNum; a++){
    var userAnsNum = parseInt(prompt(askNum));
    ansNumReturn.push(userAnsNum);
    attemptsRemaining--;
    if(userAnsNum > corrNum){
      alert('That\'s too high. You have ' + attemptsRemaining + ' attempts left.');
    } else if (userAnsNum < corrNum){
      alert('That\'s too low. You have ' + attemptsRemaining + ' attempts left.');
    } else if (userAnsNum === corrNum){
      alert(corrNumResponse);
      correctAnswers++;
      return [ansNumReturn, correctAnswers];
    } else {
      alert('That\'s not a number. You have ' + attemptsRemaining + ' attempts left.');
    }
  }
  console.log(userAnsNum, correctAnswers);
  return [ansNumReturn, correctAnswers];
}

function askQuestions(ask, correct, correctResponse, incorrectResponse, amountOfAttempts){
  var correctAnswers = 0;
  var answerArray = [];
  for (var i=0; i<ask.length; i++){
    if (typeof correct[i] === 'number'){
      answerArray.push(askNumQuestion(ask, correct, correctResponse, amountOfAttempts));
    } else if (typeof correct[i] === 'object'){
      if (typeof correct[i][0] === 'Y' || typeof correct[i][0] === 'YES' || typeof correct[i][0] === 'N' || typeof correct[i][0] === 'NO'){
        answerArray.push(askYNQuestion(ask[i], correct[i], correctResponse[i], incorrectResponse[i]));
      } else {
        //ask multi-answer question
      }
    }
  }
  return [correctAnswers, answerArray];
}

var citiesBaseball = ['New York', 'Chicago', 'Detroit', 'St. Louis', 'San Fransisco', 'Milwaukee', 'Baltimore', 'Boston'];

var questionArray = ['How many household pets has David had in his lifetime?', 'Besides Seattle, name a city in which David has gone to a MLB game.'];
var correctAnswerArray = [6, ['New York', 'Chicago', 'Detroit', 'St. Louis', 'San Fransisco', 'Milwaukee', 'Baltimore', 'Boston']];
var correctResponseArray = ['You\'re right! He\'s had two dogs and four cats over the years. But three of the cats belonged to his sister.', 'You\'re right! He\'s had two dogs and four cats over the years. But three of the cats belonged to his sister.', 'You\'re right! He\'s been to games in ' + citiesBaseball.join(', ') + '.'];
var incorrectResponseArray = ['Sorry, that\'s not it.', 'Nope.'];
var numberofAttempts = [6, 4];
var userAnswerArray = [];

/*
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
  alert('You\'re right! He\'s had two dogs and four cats over the years. But three of the cats belonged to his sister.', 'You\'re right! He\'s been to games in ' + citiesBaseball.join(', '));
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
*/
