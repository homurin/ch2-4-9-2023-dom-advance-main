function sum(num1, num2) {
  return num1 + num2;
}

function decrease(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

console.info(calculator(1000, 4000, multiply));
