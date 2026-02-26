function parseValue(input) {
  return Number(
    input.replace("R$", "")
         .replace(".", "")
         .replace(",", ".")
         .trim()
  );
}