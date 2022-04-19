export const screen = document.getElementById("screen");
export const clear = document.getElementById("clear");
export const backspace = document.getElementById("backspace");
export const divide = document.getElementById("divide");
export const multiply = document.getElementById("multiply");
export const seven = document.getElementById("seven");
export const eight = document.getElementById("eight");
export const nine = document.getElementById("nine");
export const substract = document.getElementById("substract");
export const four = document.getElementById("four");
export const five = document.getElementById("five");
export const six = document.getElementById("six");
export const add = document.getElementById("add");
export const one = document.getElementById("one");
export const two = document.getElementById("two");
export const three = document.getElementById("three");
export const equal = document.getElementById("equal");
export const zero = document.getElementById("zero");
export const decimal = document.getElementById("decimal");
export const $buttonArray = [
  ...document.querySelectorAll(".buttons .button"),
].filter(
  (button) =>
    button.id !== "clear" && button.id !== "backspace" && button.id !== "equal"
);
