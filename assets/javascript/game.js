// Lets start by grabbing a reference to the <span> below:
var userText = document.getElementById("user-text");

//Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
	console.log('event', event);
	userText.textContent = event.key;
}

// PseudoCode:

// Pick a random word

// Display random word as _ _ _ _ 

// How to identify When user presses key

// document.onkeyup = function(event) {
		// what code is executed when user presses key
//}

// Pick a random word and display the _ _ _ 

// Does the key pressed match a letter in the word?

// If not then deduct from counter

// If not then change _ in the already guess box to letter pressed

// If it does then change _ in the display to the letter pressed

// Cycle through the length of the array for the word

// How to Display the number of guesses left


	var guessesLeft = 15;
	document.getElementById("guessesLeft").innerhtml = guessesLeft




/*
if (guessesleft != 0) {
document.onkeyup = function(event) {
	
	var blankTop = []
	var planetMars = ["m", "a", "r", "s"]
	var correctGuess = []
	var userGuess = event.key.toLowerCase().charAt(0);

	blanktop.length = planetMars.lenth

	for (var i = 0; i < 5; i++) {

	if (userGuess === "planetMars[1]" ||
		userGuess === "planetMars[2]" ||
		userGuess === "planetMars[3]" ||
		userGuess === "planetMars[4]" || ) {

		correctGuess.push(userGuess);
		blankTop.push(userGuess);

		else 	{
			guessesLeft--;
				}

		}
	}
} //document.onkeyup

} //top most if statement


//User presses key
//If pressed key = hidden letter
//Then display letter
//If not guessesLeft subtracts one
//Try again
//If 
*/