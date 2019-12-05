var cardType = {
  "Up"
  "Down"
  "Red"
  "Blue"
  "Green"
  "Purple"
  "Yellow"
  "Orange"
  "Pink"
  "Indigo"
  "Carrots"
  "Blueberries"
  "Broccoli"
  "Eggplant"
  "Corn"
  "Tomatoes"
  "Watermelon"
  "Plum"
  "Cauliflower"
  "Grapes"
  "Strawberries"
  "Cantaloupe"
  "Peppers"
  "Bananas"
  "Apple"
  "Peas"
  "Mushrooms"
  "Onions"
  "Hippo"
  "Lion"
  "Tiger"
  "Panda"
  "Monkey"
  "Ostrich"
  "Wolf"
  "Zebra"
  "Elephant"
  "Fox"
  "Snake"
  "Turtle"
  "Lemur"
  "Giraffe"
  "Penguin"
  "Polar Bear"
  "Squid"
  "Cat"
  "Rabbit"
  "Goat"
  "Cow"
  "Dog"
  "Pig"
  "Horse"
  "Gecko"
  "Rooster"
  "Kangaroo"
  "Ox"
  "Boar"
  "Sheep"
  "Leopard"
  "Flamingo"
}

/* document.body.onload = addElement;

function addElement () {
  let newDiv = document.createElement("div");
  newDiv.createElement(addElement);
  let section = document.getElementByTagName("section");
  section.appendChild(newDiv);
}; */

//div  target
let section = document.getElementByTagName("SECTION");
let tarDiv = section.getElementById("card");
//random generator for cards
let range = (start, end) => {
  let array = [];
  for (let i = start; i <= end; i ++) {
  array.push(i);
  }
  return array;
};
let grid = (range(1, 3));
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var num = (getRandomInt(grid.length));
var text = document.createTextNode(num);
tarDiv.appendChild(text);
