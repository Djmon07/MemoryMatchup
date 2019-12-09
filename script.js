var cardType1 = [
  "Up",
  "Down",
  "Up",
  "Down"
]
var cardType2 = [
  "Red",
  "Blue",
  "Green",
  "Purple",
  "Yellow",
  "Orange",
  "Pink",
  "Indigo",
  "Red",
  "Blue",
  "Green",
  "Purple",
  "Yellow",
  "Orange",
  "Pink",
  "Indigo"
]
var cardType3 = [
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
  "Onions",
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
var cardType4 = [
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
  "Flamingo",
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

let cards = 4;
for (let x = 1; x <= cards; x++) {
  var crDiv = document.createElement("div");
  crDiv.textContent = cardType.splice(Math.floor(Math.random() * cardType.length), 1);
  ul.appendChild(crDiv);
}
document.querySelector("input").addEventListener("click", event => {
document.location.reload(true);
})

let counter = 0;
window.addEventListener("mousedown", event => {
 if (event.key == "click") {
    counter++;
    document.body.querySelectorAll('div') = "violet";
 }
  if (counter = 2; cardType() != cardType()) {
    document.body.querySelectorAll('div') = "grey";
    counter = 0;
    event.disabled = "disabled";
  }
  if (document.body.querySelectorAll('div') = "grey") {
    document.body.createTextNode("Congratulations! You Cleared This Level!");
   document.body.style.color = "green";
    divs[div].style.fontSize = "xx-large";
    var duration = 5seconds;
    //This is where it would move on to the next level//
  }
  else {
    var duration = 5seconds;
    document.body.querySelectorAll('div') = "lightblue";
    counter = 0;
  });
