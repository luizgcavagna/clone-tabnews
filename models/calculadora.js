function somar(numero1, numero2) {
  try {
    if (isNaN(numero1) || isNaN(numero2)) throw new Error("O valor é NaN!"); // Lança o erro para o catch

    return numero1 + numero2;
  } catch (error) {
    return "Erro";
  }
}

exports.somar = somar;
