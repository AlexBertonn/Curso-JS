let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let p = document.querySelector("p");

function msg(e) {
  alert("Clicou em mim, lá ele.");
  e.stopPropagation();
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function (event) {
  btn1.removeEventListener("click", event);
});

p.addEventListener("click", function () {
  alert("CAVALO! Este é o parágrafo.");
});

/*
Se retirado o stopProppagation a ação do click no btn1 irá consequentemente efetuar o evento presente no parágrafo. Isso acontece 
pois o btn1 é uma classe filho de <p>, logo ao iniciar o evento filho o evento pai também é acionado.
Dito isto, sempre que houver dois ou mais eventos relacionados a uma classe filho, deverá ser aplicado o stopPropagation() no 
objeto evento.
 
*/
