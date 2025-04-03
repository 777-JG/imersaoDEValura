function jogar() {
  rodada = 1;
  while (rodada <= 3) {
    console.log("rodada:" + rodada);

    escolhajogador = prompt("nível " + rodada + ", vidro (1,2, ou 3?)");
    pisoquebrado = Math.floor(Math.random() * 3) + 1;
    if (escolhajogador == pisoquebrado) {
      alert("vidro quebrou, its over baby! piso quebrado era " + pisoquebrado);
      rodada = 1000;
    } else {
      alert("passou de nível! pisou quebrado era " + pisoquebrado);
    }

    rodada = rodada + 1;
  }
  if (rodada == 4) {
    alert("você chegou ao final!");
  }
}
