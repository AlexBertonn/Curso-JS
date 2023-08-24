function criaCachorro(raca, nome, cor) {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.nome = nome;
  cachorro.cor = cor;
  return cachorro;
}

let pitBull = criaCachorro("Pit Bull", "Max", "Branco");
console.log(pitBull);
