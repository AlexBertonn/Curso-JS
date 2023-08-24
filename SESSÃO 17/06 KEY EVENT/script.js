window.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    alert("Para de apertar Enter cabaço!!");
  } else if (e.key == "Barra de espaço") {
    alert("Ô CARAIO!");
  }
});

/*
Se retirado o stopProppagation a ação do click no btn1 irá consequentemente efetuar o evento presente no parágrafo. Isso acontece 
pois o btn1 é uma classe filho de <p>, logo ao iniciar o evento filho o evento pai também é acionado.
Dito isto, sempre que houver dois ou mais eventos relacionados a uma classe filho, deverá ser aplicado o stopPropagation() no 
objeto evento.
 
*/
