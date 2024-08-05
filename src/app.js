/* eslint-disable */
import "bootstrap";
import "./style.css";

let symbolCard = document.querySelectorAll(".symbol");
let numberCard = document.querySelector(".number");
let button = document.querySelector("button");

let symbols = ["♦", "♥", "♠", "♣"];
let number = ["A", 2, 3, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
// let number = ["A"];

function randomGenerator(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

function randomCard() {
  let randomSymbol = randomGenerator(symbols); // simbolo random
  let randomNumber = randomGenerator(number);
  for (let i = 0; i < symbolCard.length; i++) {
    if (randomSymbol === "♥" || randomSymbol === "♦") {
      symbolCard[i].classList.add("red");
      symbolCard[i].classList.remove("black");
    } else {
      symbolCard[i].classList.remove("red");
      symbolCard[i].classList.add("black");
    }
  }
  if (randomNumber === "A") {
    randomSymbol = "";
    numberCard.textContent = "♥";
    numberCard.style.fontSize = "300px";
    symbolCard.forEach(item => (item.textContent = randomSymbol));
    numberCard.style.color = "rgb(253, 69, 69)";
  } else {
    numberCard.style.fontSize = "100px";
    numberCard.style.color = "rgb(43, 43, 43)";
    symbolCard.forEach(item => {
      item.textContent = randomSymbol;
    });
    numberCard.textContent = randomNumber;
  }
}

randomCard();

setInterval(randomCard, 10000);

button.addEventListener("click", () => {
  randomCard();
});
