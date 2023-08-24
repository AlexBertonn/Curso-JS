for (i = 10; i > 0; i = i - 1) {
  if (i % 2 == 0) {
    console.log("Caiu no continue, portanto numero par.");
    continue;
  }
  console.log(i);
}
