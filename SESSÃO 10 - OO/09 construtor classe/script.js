class Cachorro {
  constructor(raca, nome, cor) {
    this.raca = raca;
    this.nome = nome;
    this.cor = cor;
  }
}

let poodle = new Cachorro("Poodle", "Max", "Preto");
console.log(poodle);

/*
Basicamente ao invés de criar a classe dentro de uma função
você a cria direto pelo class constructor, facilita muito
o entendimento da parada e deixa até minha mente mais leve kk
*/
