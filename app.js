'use strict';

function askYNQuestion(qArr, corrArr, corrResp, incoResp){
  var userAnsReturn = [];
  var correctAnswers = 0;
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
  console.log(correctAnswers);
  return [userAnsReturn, correctAnswers];
}

function askNumQuestion (askNum, corrNum, corrNumResponse, attemptsNum){
  var ansNumReturn = [];
  var correctAnswers = 0;
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

function askMultiAnsQuestion (askMulti, corrMulti, corrRespMulti, incorrRespMulti, attemptsMulti){
  var ansMultiReturn = [];
  var correctAnswers = 0;
  var attemptsLeftMulti = attemptsMulti;
  for (var i=0; i<attemptsMulti; i++){
    var userAnsMulti = prompt(askMulti).toUpperCase();
    ansMultiReturn.push(userAnsMulti);
    attemptsLeftMulti--;
    for (var j=0; j<corrMulti.length; j++){
      if (userAnsMulti === corrMulti[j].toUpperCase()){
        alert(corrRespMulti);
        correctAnswers++;
        return [ansMultiReturn, correctAnswers];
      }
    }
    if (attemptsLeftMulti === 0){
      alert('Sorry, that was your last guess.')
    } else if (attemptsLeftMulti !== 0){
      alert('Nope, try again');
    }
  }
  console.log(correctAnswers);
  return [ansMultiReturn, correctAnswers];
}

function askQuestions(ask, correct, correctResponse, incorrectResponse, amountOfAttempts){
  var correctFinalAnswers = 0;
  var numberOfQuestions = 0;
  var answerArray = [];
  for (var tick=0; tick<ask.length; tick++){
    if (typeof correct[tick] === 'number'){
      console.log('Number');
      console.log(correctFinalAnswers);
      var answer = askNumQuestion(ask[tick], correct[tick], correctResponse[tick], amountOfAttempts[tick]);
      correctFinalAnswers += answer[1];
      numberOfQuestions += 1;
      console.log(numberOfQuestions);
      console.log(correctFinalAnswers);
      console.log(answer);
      answerArray.push(answer[0]);
    } else if (typeof correct[tick][0] === 'object'){
      console.log('YN');
      console.log(correctFinalAnswers);
      var answer = askYNQuestion(ask[tick], correct[tick], correctResponse[tick], incorrectResponse[tick]);
      correctFinalAnswers += answer[1];
      numberOfQuestions += answer[0].length;
      console.log(numberOfQuestions);
      console.log(correctFinalAnswers);
      console.log(answer);
      answerArray.push(answer[0]);
    } else if (typeof correct[tick][0] === 'string'){
      console.log('Multi');
      console.log(correctFinalAnswers);
      var answer = askMultiAnsQuestion(ask[tick], correct[tick], correctResponse[tick], incorrectResponse[tick], amountOfAttempts[tick]);
      correctFinalAnswers += answer[1];
      numberOfQuestions += 1;
      console.log(numberOfQuestions);
      console.log(correctFinalAnswers);
      console.log(answer);
      answerArray.push(answer[0]);
    }
  }
  alert('You answered ' + correctFinalAnswers + ' out of ' + numberOfQuestions + ' correctly!')
  return [correctFinalAnswers, numberOfQuestions, answerArray];
}

function writeAskQuestions(finalAnswerArray){
  document.getElementById('Answer1').innerHTML = "Does David have pets? Your guess: " + finalAnswerArray[2][0][0] + " Correct answer: Yes";
  document.getElementById('Answer2').innerHTML = "Does David have a cat? Your guess: " + finalAnswerArray[2][0][1] + " Correct answer: No";
  document.getElementById('Answer3').innerHTML = "Does David walk to class? Your guess: " + finalAnswerArray[2][0][2] + " Correct answer: Yes";
  document.getElementById('Answer4').innerHTML = "Does David walk his dog at lunch? Your guess: " + finalAnswerArray[2][0][3] + " Correct answer: Yes";
  document.getElementById('Answer5').innerHTML = "Is David working while taking Code 201? Your guess: " + finalAnswerArray[2][0][4] + " Correct answer: No";
  document.getElementById('Answer6').innerHTML = "How many household pets has David had? Your guesses: " + finalAnswerArray[2][1].join(', ') + " Correct answer: 6";
  document.getElementById('Answer7').innerHTML = "Besides Seattle, in which cities has David been to a MLB game? Your guesses: " + finalAnswerArray[2][2].join(', ') + " Correct answers: " + citiesBaseball.join(', ');
}

var citiesBaseball = ['New York', 'Chicago', 'Detroit', 'St. Louis', 'San Fransisco', 'Milwaukee', 'Baltimore', 'Boston'];

var questionArray = [['Does David have any pets?','Does David have a cat?','Does David walk to class each day?','Does David walk his dog during his lunch hour?','Is David still working while he takes Code 201?'], 'How many household pets has David had in his lifetime?', 'Besides Seattle, name a city in which David has gone to a MLB game.'];
var correctAnswerArray = [[['Y','N','Y','Y','N'],['YES','NO','YES','YES','NO']],6, citiesBaseball];
var correctResponseArray = [['You\'re right! He does have a pet.','You\'re right! David has a dog, not a cat.','Right you are, but he only lives two blocks away so it\'s not that impressive.','Well he usually does. Sometime his dog goes to daycare.','You\'re right, he took the month off from work to learn code!'], 'You\'re right! He\'s had two dogs and four cats over the years. But three of the cats belonged to his sister.', 'You\'re right! He\'s been to games in ' + citiesBaseball.join(', ') + '.'];
var incorrectResponseArray = [['Actually, he does have a pet.','Wrong, David has a dog.','Actually he does walk to class, but he only lives two blocks away.','He actually walks his dog most days during the lunch hour. Occasionally his dog goes to daycare for the whole day.','There\'s no way David could work while taking classes from 9am to 6pm.'], 'Sorry, that\'s not it.', 'Nope.'];
var numberofAttempts = [1, 6, 4];
var userAnswerArray = [];

var finalAnswerArray = askQuestions(questionArray, correctAnswerArray, correctResponseArray, incorrectResponseArray, numberofAttempts);
console.log(finalAnswerArray);
writeAskQuestions(finalAnswerArray);
