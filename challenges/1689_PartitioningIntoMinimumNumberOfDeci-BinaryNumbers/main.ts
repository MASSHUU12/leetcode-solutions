function minPartitions(n: string): number {
  let max = 0;

  for (let i = 0; i < n.length; i++) {
    const num = parseInt(n.charAt(i));

    if (num > max) max = num;
  }

  return max;
}

console.log(minPartitions("82734"));
