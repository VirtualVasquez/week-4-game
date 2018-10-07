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
        $('#yourNumber').empty();
        $('#yourNumber').append("Your Number: " + ranNum);
        console.log("Random: " + ranNum);



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

function restock() {
	$('#wins').empty();
	$('#losses').empty();								
    $('#wins').append("Wins: " + wins);
    $('#losses').append("Losses: " + losses);	
}
//MAIN PROCESS
//============================================================
$(document).ready(function() 
{
	restock();
	newGame();

	//on click, crystals will add unknown assigned No. to score

		$('.crystal').on('click', function() 
		{
			var onClick = parseInt($(this).val());
			score = score + onClick;
			$('#score').empty();
			$('#score').append(score);
			console.log(score);
			if (score === ranNum) 
			{	
				console.log("win");
				wins = wins + 1;
				restock()	
				newGame();
			}
			else if (score > ranNum)
			{
				console.log("loss");
				losses = losses + 1;
				$('#losses').empty();
				$('#wins').empty();
				restock();				
				newGame();
			}

		});
});