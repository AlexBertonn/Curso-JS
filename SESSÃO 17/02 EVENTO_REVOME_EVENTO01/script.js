let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

function msg() {
  alert("Clicou em mim, lá ele.");
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", () => {
  btn1.removeEventListener("click", msg);
});

/*
Basicamente para o evento de remoção, necessáriamente a função que será removida deverá ser uma função externa, ou seja, deverá
ser apresentada fora de um objeto, que neste caso seria o botão.
*/
