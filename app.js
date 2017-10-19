var inquirer = require('inquirer');
var Words = require('./word.js');
var Letters = require('./letter.js');


var wordConstructor = new Words();        
var letterConstructor =  new Letters();   

var currentWord;
var blankCurrentWord;
var turns;
var lettersTried;

function playGame() {
  console.log(blankCurrentWord);

  inquirer.prompt([
    {
      type: "input",
      message: "Let's Play Animal Hangman! Guess A Letter:",
      name: "letter"
    },
  ]).then(function (user) {

    // get more error information (TODO take out when done)
    try {

    var userGuessLetter = user.letter;
    var isLetter = letterConstructor.confirmLetter(userGuessLetter);
    var inWord = false;

    if(isLetter === true) {
      for(var i = 0; i < currentWord.length; i++) {
        if(userGuessLetter == currentWord[i]) {
          blankCurrentWord = letterConstructor.replaceLetter(blankCurrentWord, i * 2, userGuessLetter);
          inWord = true;
        }
      }
    
      if(!inWord && !letterConstructor.inArray(userGuessLetter, lettersTried)) {
        lettersTried.push(userGuessLetter);
        turns--;
      }

      console.log("You have " + turns + " turns left");
      console.log("Letters you have guessed: " + lettersTried);
      console.log("");

      if(blankCurrentWord.indexOf("_") === -1) {
        console.log("You won!");
        console.log("The word was " + currentWord + "!");
        playAgain();
      } else if(turns == 0){
        console.log("Game over");
        console.log("The word was " + currentWord + "!");
        playAgain();
      } else {
        playGame();
      }
    } else {
      console.log("That was not a letter. Please enter a letter A-Z.");
      console.log("");
      playGame();
    }

  // if we got an error, print it out
  } catch (ex) {
    console.log(ex)
  }
  });
}

function getWord() {
  currentWord = wordConstructor.wordList[Math.floor(Math.random()*wordConstructor.wordList.length)];
  blankCurrentWord = "";

  for(var i = 0; i < currentWord.length; i++) {
    blankCurrentWord += '_ ';
  }

  lettersTried = [];
  turns = 10;
}

function playAgain() {
  inquirer.prompt([
  {
    type: "confirm",
    message: "Do you want to play again?",
    name: "again"
  },
  ]).then(function (user) {
    if(user.again) {
      console.log("");
      getWord();
      playGame();
    } else {
      console.log("Good Bye!");
    }
  });
}


getWord();
playGame();
