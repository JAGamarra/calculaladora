import * as buttons from "./htmlElements.js";
let firstKeyPress = false;

buttons.clear.addEventListener("click", function () {
  buttons.screen.innerHTML = "0";
  firstKeyPress = false;
});

buttons.backspace.addEventListener("click", function () {
  let screen = buttons.screen.innerText;
  if (screen.length > 1) {
    screen = screen.slice(0, -1);
  } else {
    screen = "0";
    firstKeyPress = false;
  }
  buttons.screen.innerText = screen;
});

// Vía fácil
buttons.equal.addEventListener("click", function () {
  let screen = buttons.screen.textContent;
  buttons.screen.innerText = eval(screen);
});

// Vía manual

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
