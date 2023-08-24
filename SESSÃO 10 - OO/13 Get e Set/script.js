class Cachorro {
  constructor(cor, nome, raca) {
    this.cor = cor;
    this.raca = raca;
    this.nome = nome;
  }

  get getCor() {
    return this.cor;
  }

  set setCor(cor) {
    this.cor = cor;
  }

  get getName() {
    return this.nome;
  }

  set setName(nome) {
    this.nome = nome;
  }
}

let pastor = new Cachorro("Indefinida", "Pator Alemão", "Indefinido");

console.log(pastor);

pastor.setCor = "Capa preta";
console.log(pastor.cor);

pastor.setName = "Thunder";
console.log(pastor.nome);

/*
Nesta aula foi ensinado o metodo get e set, nele você pode 
alterar valores dentro de uma classe.
*/
