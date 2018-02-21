//GLOBAL VARIABLES
//=====================================================

var ranNum = 0;
var wins = 0;
var losses = 0;
var score = 0;
var green = 0;
var red = 0;
var blue = 0;
var yellow = 0;

//FUNCTIONS
//====================================================================================

function newGame()
{
	//RESET
  	//=====================================================

	// on load, random number generated between 19-120

    	ranNum = 19 + Math.floor(Math.random() * 101);
        $('#ranNum').text(ranNum);
        console.log(ranNum);

	//on load, random number assigned from 1-12 to each crystal
	//for the duration of the game
		green = Number(1 + Math.floor(Math.random() * 11));
        document.getElementById("green").value = green;
        console.log(Number($('#green').val()));

		do {
			red = 1 + Math.floor(Math.random() * 11);
		} while (red === green);
        document.getElementById("red").value = red;
        console.log(Number($('#red').val()));

		do {
			blue = 1 + Math.floor(Math.random() * 11);
		} while (blue === red || blue === green);		
        document.getElementById("blue").value = blue;
        console.log(Number($('#blue').val()));

        do{
			yellow = 1 + Math.floor(Math.random() * 11);
		} while (yellow === green || yellow === red 
			|| yellow === blue);
        document.getElementById("yellow").value = yellow;
        console.log(Number($('#yellow').val()));

        score = 0;
        $('#score').text(score);
}
//MAIN PROCESS
//============================================================
$(document).ready(function() 
{
	newGame();

	//on click, crystals will add unknown assigned No. to score

		$('.crystal').on('click', function() 
		{
			var onClick = parseInt($(this).val());
			score = score + onClick;
			$('#score').text(score);
			console.log(score);
			if (score === ranNum) 
			{	
				wins = wins + 1;
				$('#wins').text(wins);
				newGame();
			}
			else if (score > ranNum)
			{
				losses = losses + 1;
				$('#losses').text(losses);
				newGame();
			}

		});
});