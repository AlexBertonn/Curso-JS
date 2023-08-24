const cachorro = {
  raca: "SRD",
  nome: "Sem nome",
  idade: "Não sei",

  uivar: function () {
    console.log("Auuuu");
  },
  rosnar: function () {
    console.log("Grr");
  },

  setRaca: function (raca) {
    this.raca = raca;
  },

  setNome: function (nome) {
    this.nome = nome;
  },

  setIdade: function (idade) {
    this.idade = idade;
  },
};

console.log(cachorro.nome);
console.log(cachorro.idade);
console.log(cachorro.raca);

cachorro.setRaca("Pator Alemão");
console.log(cachorro.raca);

cachorro.setNome("Luna");
console.log(cachorro.nome);

cachorro.setIdade("5 anos");
console.log(cachorro.idade);
