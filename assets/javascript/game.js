var winsDiv = document.getElementById("wins");
var lossesDiv = document.getElementById("losses");
var guessesLeftDiv = document.getElementById("guesses-left");
var lettersPickedDiv = document.getElementById("letters-picked");
var winCount = 0;
var lossCount = 0;
var guessesCount = 12;
var lettersPicked = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

function chooseRandomLetter(){  
    computerGuess;
}

function reset() {
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    var guessesCount = 12;
    var lettersPicked = "";
    guessesLeftDiv.innerText = "Guesses Left: " + guessesCount;
    lettersPickedDiv.innerText = "You guessed: " + lettersPicked;
    console.log(computerGuess);
  }

chooseRandomLetter();
console.log(computerGuess);

winsDiv.innerText = "Wins: " + winCount;
lossesDiv.innerText = "Losses: " + lossCount;
guessesLeftDiv.innerText = "Guesses Left: " + guessesCount;
lettersPickedDiv.innerText = "You guessed: " + lettersPicked;

document.onkeyup = function(event) {
  var userGuess = event.key;
  if (guessesCount > 1) {
    if (computerGuess === userGuess) {
      console.log("it works");
      winCount+= 1;
      winsDiv.innerText = "Wins: " + winCount;
      guessesCount = 12;
      guessesLeftDiv.innerText = "Guesses Left: " + guessesCount;
      lettersPicked = "";
      lettersPickedDiv.innerText = "You guessed: " + lettersPicked;

    } else {
      lettersPicked.push(userGuess);
      console.log(lettersPicked);
      console.log("it's bad, friend");
      guessesCount-= 1;
      lettersPickedDiv.innerText = "You guessed: " + lettersPicked;
      guessesLeftDiv.innerText = "Guesses Left: " + guessesCount;
    }
  } else {
    console.log("you lost my dude");
    lossCount+= 1;
    lossesDiv.innerText = "Losses: " + lossCount;
  }
};

reset();
console.log(guessesCount, lettersPicked);