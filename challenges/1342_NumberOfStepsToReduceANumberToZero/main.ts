console.log(numberOfSteps(14));

function numberOfSteps(num: number): number {
  let steps = 0;

  while (num !== 0) {
    if (num & 1) num--;
    else num >>= 1;

    steps++;
  }

  return steps;
}
