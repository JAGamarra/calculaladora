import * as buttons from "./htmlElements.js";
let firstKeyPress = false;

buttons.clear.addEventListener("click", function () {
  buttons.screen.innerHTML = "0";
  firstKeyPress = false;
});

buttons.backspace.addEventListener("click", function () {
  let screenText = buttons.screen.innerText;
  if (screenText.length > 1) {
    screenText = screenText.slice(0, -1);
  } else {
    screenText = "0";
    firstKeyPress = false;
  }
  buttons.screen.innerText = screenText;
});

// * Vía eval() *
buttons.equal.addEventListener("click", function () {
  let screenText = buttons.screen.textContent;
  try {
    buttons.screen.innerText = eval(screenText);
  } catch (e) {
    buttons.screen.innerText = "Syntax Error";
    firstKeyPress = false;
  }
});

// * Vía manual *
/*
buttons.equal.addEventListener("click", function () {
  let screenText = buttons.screen.innerText;
  if (screenText.includes("*")) {
    let numbers = screenText.split("*");
    buttons.screen.innerText = Number(numbers[0]) * Number(numbers[1]);
  } else if (screenText.includes("/")) {
    let numbers = screenText.split("/");
    buttons.screen.innerText = Number(numbers[0]) / Number(numbers[1]);
  } else if (screenText.includes("+")) {
    let numbers = screenText.split("+");
    buttons.screen.innerText = Number(numbers[0]) + Number(numbers[1]);
  } else if (screenText.includes("-")) {
    let numbers = screenText.split("-");
    buttons.screen.innerText = Number(numbers[0]) - Number(numbers[1]);
  }
});
*/

buttons.$buttonArray.forEach((button) => {
  button.addEventListener("click", function () {
    if (firstKeyPress === false) {
      buttons.screen.innerText = "";
      firstKeyPress = true;
    }
    if (buttons.screen.innerText.length < 24) {
      buttons.screen.innerHTML += button.innerHTML;
    } else {
      alert("You can't write more than 24 characters");
    }
  });
});
