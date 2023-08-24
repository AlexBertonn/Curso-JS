let cachorro = {
  patas: 4,
  raca: "Indefinida",
  idade: "Indefinida",
  latir: function () {
    console.log("Au au");
  },
};

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = "Labrador";
console.log(labrador.raca);
console.log(cachorro.raca);

//A classe é como um molde para um objeto.
