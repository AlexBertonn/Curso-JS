function Cachorro(raca, cor, nome) {
  this.raca = raca;
  this.nome = nome;
  this.cor = cor;
}

let poodle = new Cachorro("Poodle", "Branco", "Jason");
console.log(poodle);

/*Neste caso a funcção está criando um modelo de dados para o "Objeto"
que nesse caso seria a classe Cachorro (sempre que iniciar com letra maiúcula
trata-se de uma classe), logo após foi criada a variável poodle no qual 
adicionará os dados referentes ao cachorrinho da raça poodle.  */

function Paciente(nome, idade, sintoma) {
  this.nome = nome;
  this.idade = idade;
  this.sintoma = sintoma;
}

let alex = new Paciente("Alex", "22 anos", "Gripe");
console.log(alex);
/*Neste exemplo utilizei uma ideia para clínica médica */
