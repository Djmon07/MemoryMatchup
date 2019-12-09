let cardTypeOne = [
  "Up",
  "Down"
]
let cardTypeTwo = [
  "Red",
  "Blue",
  "Green",
  "Purple",
  "Yellow",
  "Orange",
  "Pink",
  "Indigo"
]
let cardTypeThree = [
  "Carrots",
  "Blueberries",
  "Broccoli",
  "Eggplant",
  "Corn",
  "Tomatoes",
  "Watermelon",
  "Plum",
  "Cauliflower",
  "Grapes",
  "Strawberries",
  "Cantaloupe",
  "Peppers",
  "Bananas",
  "Apple",
  "Peas",
  "Mushrooms",
  "Onions"
]
let cardTypeFour = [
  "Hippo",
  "Lion",
  "Tiger",
  "Panda",
  "Monkey",
  "Ostrich",
  "Wolf",
  "Zebra",
  "Elephant",
  "Fox",
  "Snake",
  "Turtle",
  "Lemur",
  "Giraffe",
  "Penguin",
  "Polar Bear",
  "Squid",
  "Cat",
  "Rabbit",
  "Goat",
  "Cow",
  "Dog",
  "Pig",
  "Horse",
  "Gecko",
  "Rooster",
  "Kangaroo",
  "Ox",
  "Boar",
  "Sheep",
  "Leopard",
  "Flamingo"
]
var ul = document.querySelector("ul")

function drawGrid (cardType) {
//copy of cardType
let copy = ?
let cards = cardTypeOne.length * 2;
for (let x = 1; x <= cards; x++) {
  var crDiv = document.createElement("div");
  crDiv.textContent = cardType.splice(Math.floor(Math.random() * cardType.length), 1);
  ul.appendChild(crDiv);
}
document.querySelector("input").addEventListener("click", event => {
document.location.reload(true);
})
}
 drawGrid;

let counter = 0;
window.addEventListener("mousedown", event => {
 if (event.key == "click") {
    counter++;
    document.body.querySelectorAll('div') = "violet";
 }
  if (counter = 2 && cardType1() == cardType1()) {
    document.body.querySelectorAll('div') = "grey";
    counter = 0;
    event.disabled = "disabled";
  }
  if (document.body.querySelectorAll('div') = "grey") {
    document.body.createTextNode("Congratulations! You Cleared This Level!");
   document.body.style.color = "green";
    divs[div].style.fontSize = "xx-large";
    var duration = 5 seconds;
    //This is where it would move on to the next level//
  }
  else {
    document.body.querySelectorAll('div') = "violet";
    var duration = 5 seconds;
    document.body.querySelectorAll('div') = "lightblue";
    counter = 0;

  });
