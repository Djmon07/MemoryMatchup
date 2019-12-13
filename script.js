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

let deck = [cardType1, cardType2, cardType3, cardType4];
let deckNum = 1;
let ul = document.querySelector("ul");
let count = 0;
//get all the obj from array and create divs using each twice
function drawGrid(level) {
  //copy of cardType
  let cards = Array.from(level);
  let length = cards.length
  for (let y = 0; y < length; y++) {
    let x2 = cards[y];
    cards.push(x2);
  };
  for (let x = 0; x < length * 2; x++) {
    var crDiv = document.createElement("div");
    crDiv.textContent = cards.splice(Math.floor(Math.random() * cards.length), 1);
    crDiv.setAttribute("id", "none");
    ul.appendChild(crDiv);
  }
};
drawGrid(deck[deckNum]);

//Click events
let divAll = ul.querySelectorAll("div")
let div = ul.querySelector("div")
const clickHandeler = event => {
  event.target.style.background = "violet";
  event.target.style.color = "black";
  console.log(event.target)
  if (firstDiv == null) { // first click
    firstDiv = event.target;
    firstDiv.style.display="block";
    event.target.setAttribute("id", "clicked");
  } else { // second click
    if (event.target.textContent == firstDiv.textContent && event.target != firstDiv) {
      console.log('we got a match', firstDiv);
      console.log(event.target)
      event.target.style.background = "grey";
      firstDiv.style.background = "grey";
      console.log(firstDiv.style.background,firstDiv)
      firstDiv.style.display="none";
      event.target.style.display="none"
      firstDiv = null;


    } else { //if not a match
      let timedFlipBack = setTimeout(() => {
        console.log('not a match');
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
let divs = Array.from(divAll);
let length = divAll.length;
console.log(divs);
for (let y = 0; y < length; y++) {
  divs[y].addEventListener("click", clickHandeler);
  console.log(divs[y]);
};
