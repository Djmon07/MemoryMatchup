let cardType1 = [
  "Up",
  "Down"
];
let cardType2 = [
  "Red",
  "Blue",
  "Green",
  "Purple",
  "Yellow",
  "Orange",
  "Pink",
  "Indigo"
];
let cardType3 = [
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
];
let cardType4 = [
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
];
let ul = document.querySelector("ul");
let deck = [cardType1, cardType2, cardType3, cardType4, 5];
let deckNum = 1;
let count = 0;
//get all the obj from array and create divs using each twice
function drawGrid(level) {
  //copy of cardType
  let cards = Array.from(level);
  let length = cards.length;
  console.log(length);
  for (let y = 0; y < length; y++) {
    let x2 = cards[y];
    cards.push(x2);
  };
  for (let x = 0; x < length * 2; x++) {
    var crDiv = document.createElement("div");
    crDiv.textContent = cards.splice(Math.floor(Math.random() * cards.length), 1);
    ul.appendChild(crDiv);
  }
};
drawGrid(deck[deckNum]);
let divAll = ul.querySelectorAll("div")
let divs = Array.from(divAll);
let divLength = divAll.length;//all div's length
console.log(divLength);
match = 0;
//Click events
const clickHandeler = event => {
  event.target.style.background = "violet";
  event.target.style.color = "black";
  if (firstDiv == null) { // first click
    firstDiv = event.target;
    firstDiv.style.display = "block";
  } else { // second click
    if (event.target.textContent == firstDiv.textContent && event.target != firstDiv) {
      firstDiv.style.display = "none";
      event.target.style.display = "none";
      firstDiv = null;
      match ++;
      console.log(match);
      if (match == divLength / 2){
        console.log("win")
        var crP = document.createElement("p")
        var newText = document.createTextNode("You won!")
        crP.appendChild(newText)
        var currentP = document.getElementById("p")
        document.body.insetBefore(ul)
      }
    } else { //if not a match
      let timedFlipBack = setTimeout(() => {
        event.target.style.background = "lightblue";
        event.target.style.color = "transparent";
        firstDiv.style.background = "lightblue";
        firstDiv.style.color = "transparent";
        firstDiv = null;
      }, 200);
    }
  }
};
let firstDiv = null;
for (let y = 0; y < divLength; y++) {
  divs[y].addEventListener("click", clickHandeler);
};
