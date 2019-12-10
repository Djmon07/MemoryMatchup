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


var ul = document.querySelector("ul");
function drawGrid (level) {
//copy of cardType
  let cards = Array.from(level);
  let length = cards.length
  for (let y = 0; y < length; y++){
    let x2 = cards[y];
    cards.push(x2);
  };
  for (let x = 0; x < length * 2; x++) {
    var crDiv = document.createElement("div");
    crDiv.textContent = cards.splice(Math.floor(Math.random() * cards.length), 1);
    ul.appendChild(crDiv);
  }
};
drawGrid(cardTypeOne)

document.querySelector("input").addEventListener("click", event => {
document.location.reload(true);
})
let counter = 0;
window.addEventListener("mousedown", event => {
 if (event.key == "click") {
     counter++;
     document.body.querySelectorAll("div").style.backgroundColor = "violet";
   };
  if (counter = 2 && cardType1() == cardType1()) {
     document.body.querySelectorAll("div").style.backgroundColor = "grey";
     event.disabled = "disabled";
   };
   if (document.body.querySelectorAll("div").style.backgroundColor = "grey") {
     document.body.createElement("p");
     document.querySelector("p").appendChild.createTextNode("Congratulations! You Cleared This Level!");
     document.body.style.color = "lightgreen";
     document.body.querySelector("p").style.fontSize = "xx-large";
     counter = 0;
     setTimeout(function, 5000 milliseconds) {
      //This is where we would program how it would move on to the next level
  };
};
   else {
     counter = 2 && cardType1() !== cardType1());
     document.body.querySelectorAll("div") = "violet";
     setTimeout(function, 3000 milliseconds) {
     document.body.querySelectorAll("div") = "lightblue";
     counter = 0;
  };
});
