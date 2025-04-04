function jogar() {
  personagem = ["", "", ""];

  viloes = ["", "", ""];

  forcaPersonagem = 0;
  forcaViloes = 0;
  alert(personagem);

  for (let i = 0; i < 3; i++) {
    escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i + 1));
    personagem[i] = escolhaPersonagem;
  }
}
