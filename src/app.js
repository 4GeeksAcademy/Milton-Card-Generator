/* eslint-disable */
import "bootstrap";
import "./style.css";

let symbolCard = document.querySelectorAll(".symbol");
let numberCard = document.querySelector(".number");
let button = document.querySelector("button");
let input = document.querySelector("input");

let symbols = ["♦", "♥", "♠", "♣"];
let number = ["A", 2, 3, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
// let number = ["A"];

function randomGenerator(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

function randomCard() {
  let randomSymbol = randomGenerator(symbols);
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

let timer;
timer = setInterval(randomCard, 10000);

input.addEventListener("input", () => {
  let inputValue = input.value;
  clearInterval(timer);

  if (inputValue === "") {
    timer = setInterval(randomCard, 10000);
  } else {
    let time = Number(inputValue) * 1000;
    timer = setInterval(randomCard, time);
  }
});

button.addEventListener("click", () => {
  randomCard();
});
