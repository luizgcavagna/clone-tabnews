const calculadora = require("../../models/calculadora.js");

test("Somar 2 + 2 = 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Somar 5 + 100 = 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("testando try catch", () => {
  const resultado = calculadora.somar(100, "a");
  expect(resultado).toBe("Erro");
});
