let numero = 5;

while (numero < 50) {
  console.log(numero);
  numero += 10;
}

/*
Esta incrementacao resumida serve para simplificar o codigo
sem ela ele ficaria assim:

while (numero < 50){
  console.log(numero)
  numero = numero + 10;
}
*/

for (i = 10; i < 100; i += 10) {
  console.log(i);
}

/*
Tambem existe a opcao de somar +1 em cada variavel que seria o uso de ++
ao inves de ter de colocar: i = i + 1
Obs.: Serve tambem para subtracao, utilizando o --
*/
