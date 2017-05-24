// Lets start by grabbing a reference to the <span> below:
var userText = document.getElementById("user-text");

//Next, we give JavaScript a function to execute when onkeyup event fires.

document.onkeyup = function(event) {
	console.log('event', event);
	userText.textContent = event.key;
}

document.onkeyup = function(event) {
	
	var planetMars = ["m", "a", "r", "s"]
	var userGuess = event.key.toLowerCase().charAt(0);

	for (var i = 0; i < 20; i++) {

	if (userGuess === "planetMars[1]" ||
		userGuess === "planetMars[2]" ||
		userGuess === "planetMars[3]" ||
		userGuess === "planetMars[4]" || ) {



		}
	}





function letterChecker(x) {}

	var firstChar = x.tolowerCase().charAt(0);

	if (firstChar === "planetMars[1]" || 
		firstChar === "planetMars[2]" ||






