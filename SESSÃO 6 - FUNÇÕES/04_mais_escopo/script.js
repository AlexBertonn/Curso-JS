let x = 10;

//Abaixo foi feita a alteração do valor da variável dentro da função.
if (x > 5) {
  let x = 15;
  console.log(x);
}

//Abaixo está sendo puxado o valor da variável global, ou seja fora da função.
console.log(x);
