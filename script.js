$(document).ready(function() {




	var answer = Math.floor((Math.random()*100)+1);
	var feedback;
	var answers = 0;
	
	

	var checkAnswer = function() {

	var userIpt = $('#userInput').val();	
	var userInput = parseInt(userIpt, 10);

	if(isNaN(userInput)) {
		alert("Nice try, but your answer must be an number");
	}

	else if (userInput < 1 || userInput > 100) {
		alert("must be between 1 and 100")
	}

	else if (userInput > answer) {
		alert("too hot");
	}

	else if (userInput < answer) {
		alert("too cold " + answer);
	}

	else if (userInput == answer) {
		alert("right on");
	}

	answers++;
	$('#guesses').append(userInput + " ");
	$('#gradient').html(answers);
	$('#userInput').val("");
	$('#userInput').focus();
	}

	
	$('#userInput').focus(); /*direct the focus to the number input area */

	
	$('#feedback').replaceWith("Guess a number between 1 and 100...");
	$('#feedback').slideDown(5000);


	 $('#submit').click(checkAnswer);
	 $('#userInput').keyup(function(e) {
	 		if (e.keyCode == 13) {
	 			checkAnswer();
	 		}
	 });

	 $('#reset').click(function() {
	 	answer = Math.floor((Math.random()*100)+1);
		feedback = "Okay - new game";
		answers = 0;
		$('#guesses').empty();
		$('#gradient').html(answers);
		$('#userInput').val("");
		$('#userInput').focus();

	 });


});
