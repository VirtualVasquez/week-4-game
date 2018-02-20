//GLOBAL VARIABLES
//=====================================================

var ranNum = 0;
var wins = 0;
var losses = 0;
var score = '';
var green = 0;
var red = 0;
var blue = 0;
var yellow = 0;

//FUNCTIONS
//====================================================================================
function reset() 
{
	//RESET
  	//=====================================================
  		ranNum = 0;
 		score = '';
 		green = 0;
 		red = 0;
 		blue = 0;
 		yellow = 0;
	// on load, random number generated between 19-120
    	var ranNum = 19 + Math.floor(Math.random() * 100);
        $('#ranNum').text(ranNum);
        console.log(ranNum);
	//on load, random number assigned from 1-12 to each crystal
	//for the duration of the game
		var green = Number(1 + Math.floor(Math.random() * 12));
        document.getElementById("green").value = green;
        console.log(Number($('#green').val()));

		do {
			var red = 1 + Math.floor(Math.random() * 12);
		} while (red === green);
        document.getElementById("red").value = red;
        console.log(Number($('#red').val()));

		do {
			var blue = 1 + Math.floor(Math.random() * 12);
		} while (blue === red || blue === green);		
        document.getElementById("blue").value = blue;
        console.log(Number($('#blue').val()));

        do{
			var yellow = 1 + Math.floor(Math.random() * 12);
		} while (yellow === green || yellow === red 
			|| yellow === blue);
        document.getElementById("yellow").value = yellow;
        console.log(Number($('#yellow').val()));
	//==========================================================
        test=false;
        newGame();
}
function newGame()
{
	//RESET
  	//=====================================================
  		ranNum = 0;
 		score = '';
 		green = 0;
 		red = 0;
 		blue = 0;
 		yellow = 0;

	// on load, random number generated between 19-120

    	var ranNum = 19 + Math.floor(Math.random() * 100);
        $('#ranNum').text(ranNum);
        console.log(ranNum);

	//on load, random number assigned from 1-12 to each crystal
	//for the duration of the game
		var green = Number(1 + Math.floor(Math.random() * 12));
        document.getElementById("green").value = green;
        console.log(Number($('#green').val()));

		do {
			var red = 1 + Math.floor(Math.random() * 12);
		} while (red === green);
        document.getElementById("red").value = red;
        console.log(Number($('#red').val()));

		do {
			var blue = 1 + Math.floor(Math.random() * 12);
		} while (blue === red || blue === green);		
        document.getElementById("blue").value = blue;
        console.log(Number($('#blue').val()));

        do{
			var yellow = 1 + Math.floor(Math.random() * 12);
		} while (yellow === green || yellow === red 
			|| yellow === blue);
        document.getElementById("yellow").value = yellow;
        console.log(Number($('#yellow').val()));
}
function winLose()
{
	if (score === ranNum) 
	{
		wins++;
		document.getElementById('wins').innerHTML = wins;
		reset();
	}
	else if (score > ranNum)
	{
		losses++;
		document.getElementById('losses').innerHTML = losses;
		reset();
	}	
}
//MAIN PROCESS
//=======================================================================
	newGame();

	//on click, crystals will add unknown assigned No. to score

		$('.crystal').on('click', function() 
		{
			var onClick = Number($(this).val());
			score = (score * 1) + (onClick * 1);
			$('#score').text(score);
			console.log(score);
			if (score === ranNum) 
			{	
				wins = wins + 1;
				$('#wins').text(wins);
			}
		});