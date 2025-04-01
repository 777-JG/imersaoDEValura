function conversor() {
  let valordolar = parseFloat(prompt("Digite um valor em dólar:"));
  if (isNaN(valordolar)) {
    alert("Por favor, insira um número válido.");
    return;
  }
  let dolar = 5.73;
  alert("R$ " + (valordolar * dolar).toFixed(2));
}
