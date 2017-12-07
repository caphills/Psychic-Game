window.onload=function() {
	console.log("js sourced");

// Arrays and variables

var alphabets = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y" "z",]
var psychicLetter;
var userLetter;
var wins = 0;
var losses = 0;
var guessedLetters = 0;
var guessesLeft = 9;
var guessesSofar;

//psychic replace with myLetter
psychicLetter = alphabets[Math.floor(Math.random() *alphabets.length)];
console.log(psychicLetter);


//User time to choose a letter and print to guesses so far//

var userLetter = document.getElementById("guessesSofar");

//add event listener//
 document.addEventListener("keyup", userLetter, false);

 //add +1 to wincount span tag//
 function winsFunction(wins){
 // double quote vs single?
 	var elWins = document.getElementById('Wins');
 	elWins.innerHTML = wins;
 }
 // Adds 1 to losses span tag//

 function lossesFunction(losses) {
 	var elosses = document.getElementById('losses');
 	elosses.innerHTML = losses;	
 }

 // subtract from guesses left. if hits zero, update losses and restart guesses left counter//

 function updateGuesses(reset = false) {
 	if (guessesLeft === 0) {
 		addLoss();
 		userLetter.textContent = '';
 		alert("You lose!")
 		guessesLeft = 9;
 	}

 	var elGuessesLeft = document.getElementById('guessesLeft');
 	elGuessesLeft.innerHTML = guessesLeft;
 }
// add +1 to wins
function addWin() {
	wins = wins + 1;
	winsFunction(wins);
 }
 //Function to add +1 to losses
 function addLoss() {
 	losses = losses + 1;
 	lossesFunction(losses);
 }
 //onkey event triggered by pressing a letter//

 if(!alphabets.includes(event.key.toLowercase())) {
 	return;
 }

 // If users letter matches psychic then add to win counter and restart guess counter.
 if (psychicLetter === even.key.toLowercase()) {
 	alert("You Win!");
 	userLetter.textContent = '';
 	addWin();
 	updateGuesses(true);
 }	else {
 	//if user letter does not = psychic letter subtract from guesses left counter.
 	userLetter.textContent = (userLetter.textContent.length) ? userLetter.textContent + ',' + event.key : event.key
}	console.log("Wrong!");
	updateGuesses();

}

};
