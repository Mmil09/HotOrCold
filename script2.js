$(document).ready(function() {


	/*------- Variables and Functions -------*/

	var answer = Math.floor((Math.random()*100)+1);
	console.log("answer: " + answer);
	var feedback;
	var answers = [];
	var differenceHot = 100 - answer;
	var differenceCold = answer - 1;
	var offset;
	var win=false;
	var meterCalibration = 2;
	
	var changeFeedback = function(comment) {

		$('#feedback').fadeOut().empty();
		$('#feedback').val(comment).fadeIn();	
		$('#userInput').val("");
	}
	
	var placeAnswerHot = function(userInput) {

		var userOffsetHot = 100 - userInput;
		offset = Math.round(((userOffsetHot/differenceHot) * 100)/2);
		console.log(offset);
		$('#guesses').append("<div class='guess wrong' id='" + answers.length + "'style='left:" + (offset - meterCalibration) + "%'>" + userInput + "</div>");
		$("#" + answers.length).fadeOut(5000);

		}

	var placeAnswerCold = function(userInput) {
		var userOffsetCold = userInput - 1;
		offset = Math.round(((userOffsetCold/differenceCold) * 100)/2);
		console.log(offset);
		$('#guesses').append("<div class='guess wrong' id='" + answers.length + "'style='right:" + (offset - meterCalibration) + "%'>" + userInput + "</div>");	
		$("#" + answers.length).fadeOut(5000);
	}

	var checkAnswer = function() {


	var userIpt = $('#userInput').val();	
	var userInput = parseInt(userIpt, 10);

	if (win) {
		changeFeedback("You already won - hit reset!");
	}

	else if(isNaN(userInput)) {
		userInput = 'x';
		answers.push(userInput);
		changeFeedback("Nice try, but your answer must be an number");	
			
	}

	else if (userInput < 1 || userInput > 100) {
		answers.push(userInput);
		changeFeedback("Nice try, but your answer must be between 1 and 100");
	}

	else if (userInput > answer) {
		answers.push(userInput);
		changeFeedback("Too hot");
		placeAnswerHot(userInput);

	}

	else if (userInput < answer) {
		answers.push(userInput);
		changeFeedback("Too cold");
		placeAnswerCold(userInput);
	}

	else if (userInput == answer) {
		answers.push(userInput);
		changeFeedback("Got it - nice job! " + answers.length + " attempts.");
		$('#guesses').append("<div class='guess correct' id='" + answers.length + "'style='left:49%'>" + userInput + "</div>");
		win = true;
	}

	$('#answers').html("Attempts: " + answers.length);

	$('#userInput').focus();
	}

	var reset = function() { 
	 	answer = Math.floor((Math.random()*100)+1);
		answers = [];
		$('#answers').html("Attempts: " + answers.length);
		$('#guesses').empty();
		$('#userInput').val("");
		$('#userInput').focus();
		changeFeedback("Okay - new game");
		win=false;
	 
	}

	
	/*-------- Start program ----------*/

	$('#userInput').focus(); /*direct the focus to the number input area */
	$('#answers').html("Attempts: " + answers.length);

	
	changeFeedback("Guess a number between 1 and 100...");


	 $('#submit').click(checkAnswer);
	 $('#userInput').keyup(function(e) {
	 		if (e.keyCode == 13) {
	 			checkAnswer();
	 		}
	 });

	 $('#reset').click(reset);
	

});
