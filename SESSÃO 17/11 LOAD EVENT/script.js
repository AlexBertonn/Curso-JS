window.addEventListener("load", function () {
  alert("Deu load papai kk");
});

window.addEventListener("beforeunload", function (e) {
  event.returnValue = null;
});
