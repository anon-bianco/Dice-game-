// Dice Left:
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomDiceImage = "images/dice"+randomNumber1+".png";
var imageLeft = document.querySelector(".img1").setAttribute("src", randomDiceImage);

// Dice Right:
var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomDiceImage = "images/dice"+randomNumber2+".png";
var imageRight = document.querySelector(".img2").setAttribute("src", randomDiceImage);


// Dice Logic:
if (randomNumber1===randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = "player 1 won";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML = "player 2 won";
}
