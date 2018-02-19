//GLOBAL VARIABLES
//=====================================================

var random = 0;
var wins = 0;
var losses = 0;
var score = 0;
var green = 0;
var red = 0;
var blue = 0;
var yellow = 0;


$(document).ready(function() 
{
	// on load, random number generated between 19-120

    	var random = 19 + Math.floor(Math.random() * 100);
        $('#ranNum').text(random);
        console.log(random);

	//on load, random number assigned from 1-12 to each crystal
	//for the duration of the game
		var green = 1 + Math.floor(Math.random() * 12);
        $('#green').append($(this).attr(green));
        console.log(green);

		do {
			var red = 1 + Math.floor(Math.random() * 12);
		} while (red === green);
        $('#red').append($(this).attr(red)); 
        console.log(red);        

		do {
			var blue = 1 + Math.floor(Math.random() * 12);
		} while (blue === red || blue === green);		
        $('#blue').append($(this).attr(blue));
        console.log(blue);

        do{
			var yellow = 1 + Math.floor(Math.random() * 12);
		} while (yellow === green || yellow === red 
			|| yellow === blue);
        $('#yellow').append($(this).attr(yellow));
        console.log(yellow);

	//on click, crystals will add unknown assigned No. to score

		$('.crystal').on('click', function() 
		{
		});
			

});

		

//if score=random number, player wins, +1 to win score

//if score>random number, player loses, +1 to lose score

//Win or Lose, new number generated, new values to cyrstals
//score is set to zero



