function jogar() {
  idade = prompt("digite sua idade:");
  if (idade < 18) {
    alert("você ainda não pode jogar :(");
  }

  if (idade >= 18) {
    escolhajogador = prompt("Digite 1-pedra, 2-papel ou 3-tesoura?");
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    if (escolhaComputador == escolhajogador) {
      alert("empate");
      alert("o computador escolheu " + escolhaComputador);
    }
    if (escolhajogador == 1) {
      if (escolhaComputador == 2) {
        alert("o computador venceu!");
        alert("o computador escolheu " + escolhaComputador);
      }
      if (escolhaComputador == 3) {
        alert("Jogador vence, computador escolheu tesoura");
        alert("o computador escolheu " + escolhaComputador);
      }
    }
    if (escolhajogador == 2) {
      if (escolhaComputador == 1) {
        alert("O jogador venceu, computador escolheu pedra!");
      }
      if (escolhaComputador == 3) {
        alert("o computador venceu, escolheu tesoura!");
      }
    }
    if (escolhajogador == 3) {
      if (escolhaComputador == 1) {
        alert("o computador venceu, escolheu pedra!");
      }
      if (escolhaComputador == 2) {
        alert("o jogador venceu, computador escolheu papel! ");
      }
    }
  }
}
