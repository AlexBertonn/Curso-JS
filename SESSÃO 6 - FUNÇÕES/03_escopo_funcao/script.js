/*
Nesta aula foi explicado que uma variável não sofre alteração caso ela esteja dentro de uma função.
Basicamente se você declarar uma variável fora de uma função ela poderá ter 2 valores.
*/

let x = 10;

function valor() {
  let x = 200;
  console.log(x);
}

valor(); //Aqui o valor impresso é referente a variável dentro da função.

console.log(x); //Aqui está sendo impresso o valor da variável que está fora da função.
