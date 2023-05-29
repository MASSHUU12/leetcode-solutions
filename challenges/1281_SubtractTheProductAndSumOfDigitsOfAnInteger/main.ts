console.log(subtractProductAndSum(234));

function subtractProductAndSum(n: number): number {
  let product = 1;
  let sum = 0;

  n.toString()
    .split("")
    .forEach((s) => {
      const num = parseInt(s);

      product *= num;
      sum += num;
    });

  return product - sum;
}
