var imgArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

function displayImageLeft() {
  var num1 = Math.floor(Math.random() * 6);
  document.querySelector("#left-dice").src = imgArray[num1];
  a = num1;
  }

function displayImageRight() {
  var num2 = Math.floor(Math.random() * 6);
  document.querySelector("#right-dice").src = imgArray[num2];
  b = num2
}


function winner(){
if (a>b){
  document.querySelector("h2").textContent = "Player 1 wins";
}

if (a<b){
  document.querySelector("h2").textContent = "Player 2 wins";
}

if (a==b){
  document.querySelector("h2").textContent = "Tie";
}
}


displayImageLeft();
displayImageRight();
winner()
