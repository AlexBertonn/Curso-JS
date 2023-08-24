class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

let cachorro = new Mamifero(4);
console.log(cachorro.patas);

class Vaca extends Mamifero {
  constructor(patas, cor) {
    super(patas, patas);
    this.cor = cor;
  }
}

let rancho = new Vaca(4, "Branca");
console.log(rancho);
