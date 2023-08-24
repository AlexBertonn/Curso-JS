//Abaixo um exemplo de função comum
function imprimirNoConsole() {
  console.log("Hello World!");
}

imprimirNoConsole();

//Abaixo um exemplo de função com argumentos
function imprimeirUmNumero(num) {
  console.log("O número é " + num);
}

imprimeirUmNumero(2);
imprimeirUmNumero(3);
imprimeirUmNumero(4);

//Abaixo um exemplo de função anônima
const numeroAleatorio = function () {
  console.log(Math.random());
};

numeroAleatorio();
numeroAleatorio();
