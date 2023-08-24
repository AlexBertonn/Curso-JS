let nome = "Alex";

for (let i = 0; i < 10; i = i + 1) {
  if (i == 3) {
    nome = "Alice";
  }

  if (i == 5 && nome == "Alice") {
    console.log("O meu nome é Alice, pode parar.");
    break;
  }
  console.log(i);
}
