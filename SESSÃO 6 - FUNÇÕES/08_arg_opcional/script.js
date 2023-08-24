/*
Os argumentos opcionais servem para dar dois ou mais tipos de respostas conforme os dados parados em cada tipo de par"ametro. Veja os exemplos abaixo.
*/

function soma(a, b) {
  if (a === undefined || b === undefined) {
    console.log(
      "Esta função não pode ser executada, pois um dos valores é nulo."
    );
  } else {
    return a + b;
  }
}
console.log(soma(2));
console.log(soma(2, 8));

function saudacao(nome, idade) {
  if (nome === undefined) {
    console.log("Olá sem nome."); //Neste caso será usada a resposta para quem não colocou nenhum dos dados.
  } else if (idade === undefined) {
    console.log("Ola, " + nome, "seja bem vindo"); //Neste caso a resposta será apenas para o usuário que passaou um dos parametros (nome.)
  } else {
    console.log(
      "Olá, " + nome,
      "seja, bem vindo. Você tem " + idade,
      "anos de idade."
    ); //Neste caso será passada a resposta pára o usuário quem passou todos os dados nos parametros (nome e idade).
  }
}
saudacao();
saudacao("Alex");
saudacao("Alice", 20);

//Abaixo farei um teste em arrow function do teste 2
