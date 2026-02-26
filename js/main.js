const display = document.getElementById("display");
let firstValue = null;
let operation = null;

document.querySelectorAll("[data-op]").forEach(button => {
  button.addEventListener("click", () => {
    firstValue = parseValue(display.value || "0");
    operation = button.dataset.op;
    display.value = "";
  });
});

document.getElementById("equals").addEventListener("click", () => {
  const secondValue = parseValue(display.value || "0");
  let result;

  if (operation === "+") result = add(firstValue, secondValue);
  if (operation === "-") result = subtract(firstValue, secondValue);
  if (operation === "*") result = multiply(firstValue, secondValue);
  if (operation === "/") result = divide(firstValue, secondValue);

  display.value = result === null ? "Erro" : formatCurrency(result);
});

document.getElementById("clear").addEventListener("click", () => {
  display.value = "";
  firstValue = null;
  operation = null;
});