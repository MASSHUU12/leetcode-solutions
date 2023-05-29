console.log(hammingWeight(0b00000000000000000000000000001011));
console.log(hammingWeight(0b11111111000000001111111100000000));

function hammingWeight(n: number): number {
  return n
    .toString(2)
    .split("")
    .reduce((count, bit) => count + (parseInt(bit) & 1), 0);
}
