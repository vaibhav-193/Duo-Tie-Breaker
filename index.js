function myFunction(){
	//First update the values of textfields
	var player1 = document.querySelector("#Player1").value;
	this.value = player1;

	var player2 = document.querySelector("#Player2").value;
	this.value = player2;


	//Generating Random Numbers for two players.
	//Displaying dice image corresponding to the random number generated for both the players.
	//Changing h1 to display the Name of the Winner.

	var randomNumber1= Math.floor(Math.random()*6)+1;
    document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");

    var randomNumber2= Math.floor(Math.random()*6)+1;
    document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

    if(randomNumber1==randomNumber2){
	   document.querySelector("h1").innerHTML="Opps! Its a Tie.";
    }
    else if(randomNumber1>randomNumber2){
	   document.querySelector("h1").innerHTML=player1+" Wins!";
    }
    else{
	   document.querySelector("h1").innerHTML=player2+" Wins!";
    }
}



