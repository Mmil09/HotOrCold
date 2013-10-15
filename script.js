var anwswer = Math.floor((Math.random()*100)+1);


var userInput = prompt("Please enter a number:");

while (userInput != anwswer) {
	userInput = prompt("Try again:" + (anwswer - userInput));
}

var congrats = alert("Nice work!");
