/* eslint-disable */
import "bootstrap";
import "./style.css";

let symbolCard = document.querySelectorAll(".symbol");
let numberCard = document.querySelector(".number");
let button = document.querySelector("button");

let symbols = ["♦", "♥", "♠", "♣"];
let number = ["A", 2, 3, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function randomGenerator(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

function randomCard() {
  let randomSymbol = randomGenerator(symbols);
  for (let i = 0; i < symbolCard.length; i++) {
    if (randomSymbol === "♥" || randomSymbol === "♦") {
      symbolCard[i].classList.add("red");
      symbolCard[i].classList.remove("black");
    } else {
      symbolCard[i].classList.remove("red");
      symbolCard[i].classList.add("black");
    }
  }
  symbolCard.forEach(item => {
    item.textContent = randomSymbol;
  });
  numberCard.textContent = randomGenerator(number);
}

randomCard();

button.addEventListener("click", () => {
  randomCard();
});
