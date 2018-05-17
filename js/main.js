var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

// Variable to represent the first card the user flipped
var cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log ("user flipped queen");

//Variable to represent the 2nd card flipped
cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("user flipped king");

//add logic to check to see if two cards have been played
if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1] ){
	alert("You found a match!");
}else{
	alert("Sorry, try again.");
}