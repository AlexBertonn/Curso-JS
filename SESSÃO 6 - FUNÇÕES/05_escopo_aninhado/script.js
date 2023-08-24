/*
Abaixo vou passar três escopos, sendo um deles o global, um escopo da function e um do metodo IF.
*/

let a = 10;

function valor(x, y) {
  let a = x * y;

  if (a > 10) {
    let a = 200;
    console.log(a); //Essa chamada é para o valor dentro do IF.
  }

  console.log(a); //Essa chama é para o valor da função.
}

console.log(a); //Essa chamada é para o valor do escopo global.

valor(3, 7);
