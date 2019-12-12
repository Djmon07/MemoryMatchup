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
let deckNum = 0;
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
    crDiv.setAttribute("class", "none");
    ul.appendChild(crDiv);
  }
};
drawGrid(deck[deckNum]);
let divAll = ul.querySelectorAll("div")
let div = ul.querySelector("div")
//Click events

const clickHandeler = event => {
    event.target.style.background = "violet";
    event.target.style.color = "black";
    console.log(event.target)
    if (firstDiv == null) { // first click
      firstDiv = event.target;
      event.target.setAttribute("class", "clicked");
    } else { // second click
      if (event.target.textContent == firstDiv.textContent) {
        console.log('we got a match', firstDiv);
        event.target.style.background = "grey";
        firstDiv.style.background = "grey";
        firstDiv = null;
      } else { //if not a match
        let timedFlipBack = setTimeout(() => {
          console.log('not a match');
          event.target.style.background = "lightblue";
          event.target.style.color = "transparent";
          firstDiv.style.background = "lightblue";
          firstDiv.style.color = "transparent";
          firstDiv = null;
        }, 2000);
      }
    }

};
let firstDiv = null;
let divs = Array.from(divAll);
let length = divAll.length
for (let y = 0; y < length; y++) {
console.log(divs[y])
divs[y].addEventListener("click", clickHandeler);
}



if (divAll.getElementsByClassName = ("clicked")) {
  console.log("test")
  console.log(divAll)
}
/* let divs = Array.from(divAll);
let length = divAll.length
console.log(divs)
for (let y = 0; y < length; y++) {
  let div = divAll[y];
  console.log(div); */
/* if div.getElementsByClassName("clicked") {
    document.removeEventListener("click", clickHandeler);
    console.log("test2");
    console.log(div)
}*/


/* var element = ul.getElementsByClassName('clicked');
element.addEventListener('click', event);*/

//if document.body.ul.div.getElementsByClassName("clicked") {
//  document.removeEventListener("click", event)
//};

//if div.element.id = "clicked") {
//console.log("yes");
//}
//document.removeEventListener("click", event => {
//if (event.target.nodeName == "DIV");
//});
