$(document).ready(function() {




	var answer = Math.floor((Math.random()*100)+1);
	var feedback;
	var answers = 0;
	
	var clearFeed = function() {
		$('#feedback').empty();
	}

	var fadeOut = function() {
		$('#feedback').fadeOut();
	}

	var fadeIn = function() {
		$('#feedback').fadeIn();
	}

	var checkAnswer = function() {

	var userIpt = $('#userInput').val();	
	var userInput = parseInt(userIpt, 10);

	if(isNaN(userInput)) {
		fadeOut();
		clearFeed();
		$('#feedback').val("Nice try, but your answer must be an number");	
		fadeIn();
		userInput = 'x';	
	}

	else if (userInput < 1 || userInput > 100) {
		$('#feedback').val("Nice try, but your answer must be between 1 and 100")
	}

	else if (userInput > answer) {
		$('#feedback').val("too hot");
	}

	else if (userInput < answer) {
		$('#feedback').val("too cold " + answer);
	}

	else if (userInput == answer) {
		$('#feedback').val("right on");
	}

	answers++;
	$('#guesses').append(userInput + " ");
	$('#gradient').html(answers);
	$('#userInput').val("");
	$('#userInput').focus();
	}

	
	$('#userInput').focus(); /*direct the focus to the number input area */

	
	$('#feedback').val("Guess a number between 1 and 100...")
	/* $('#feedback').slideDown(5000); */


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
