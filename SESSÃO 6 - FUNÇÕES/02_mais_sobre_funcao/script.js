function multiplicarNumeros(x, y, z) {
  return x * y * z;
}
console.log(multiplicarNumeros(2, 3, 4));

//Abaixo temos um exemplo de variável puxando informações de uma função.
const mult = multiplicarNumeros(5, 4, 8);
console.log("O valor da variável mul é " + mult);

//A função abaixo é um exemplo com dois valores no qual identifica se o usuário pode ou não dirigir.
function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log("Pode dirigir.");
  } else {
    console.log("Não pode dirigir.");
  }
}

podeDirigir(18, false);
podeDirigir(33, true);
podeDirigir(14, false);
podeDirigir(66, true);
