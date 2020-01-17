function randomDice(){
  return Math.floor(Math.random()*6+1);
}

var randNum1 = randomDice();
var randNum2 = randomDice();

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

img1.setAttribute("src", "images/dice"+randNum1+".png")
img2.setAttribute("src", "images/dice"+randNum2+".png")

if(randNum1 > randNum2){
  document.querySelector("h1").textContent = "Player 1 wins!";
}
else if(randNum1 < randNum2){
  document.querySelector("h1").textContent = "Player 2 wins!";
}
else{
  document.querySelector("h1").textContent = "Draw!";
}
