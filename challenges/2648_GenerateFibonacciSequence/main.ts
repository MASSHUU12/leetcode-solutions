function* fibGenerator(): Generator<number, unknown, number> {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
