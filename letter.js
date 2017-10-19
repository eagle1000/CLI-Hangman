//Provide a way to create Hangman Letters
//Is an actual letter
//Can be guessed or not (boolean)
//Can display as its letter if guessed correctly, otherwise displays as underscore 


 var Letters = function() {
  
  this.confirmLetter = function(letterInput) {     //Checks to make sure the user input is a letter a-z
    var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for(var i = 0; i < letterArray.length; i++) {
      if(letterInput == letterArray[i]) {
        return true;
      }
    }
    return false;
  }
  this.replaceLetter = function(blankCurrentWord, i, userGuessLetter) {      
    return blankCurrentWord.substr(0, i) + userGuessLetter + blankCurrentWord.substr(i + 1);
  }
  this.inArray = function(letterInput, arr) {      
    for(var i = 0; i < arr.length; i++) {   
      if(arr[i] == letterInput) {
        return true;
      }
    }
    return false;
  }
}

module.exports = Letters;




















// function HangmanLetter(letter, guessedCorrectly, ) {
// 	this.letter = letter
// 	this.guessedCorrectly = guessedCorrectly
// 	this.letterDisplay = function() {
// 		if (this.guessedCorrectly === true) {
// 			return this.letter
// 		};	
// 		else {
// 		return "_";
// 		};
// 	};
// };

// module.exports = HangmanLetter
//Inside of some file that uses this one....
//TODO  
//create an array of hangman letters
//write a function that taks a guess, and for each HL, marks it guessedCorrectly if it was 
//write a function that displays all HangmanLetters
//example: co_ing


