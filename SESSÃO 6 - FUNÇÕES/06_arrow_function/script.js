/*
A Arrow Function nada mais é do que a abreviação de um função, será passado dois exemplos abaixo:
*/

let consoleTest = () => {
  console.log("Hello, World!");
};
consoleTest(); //Esta foi um arrow function com parametro vazio, apenas est[a chamando uma mensagem do console.]

let soma = (a, b) => {
  return a + b;
};
console.log(soma(10, 20)); //Essa foi uma arrow function com parametro a e b no qual será retornado o valor da soma de a e b.
