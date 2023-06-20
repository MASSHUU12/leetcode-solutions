function removeTrailingZeros(num: string): string {
  const len = num.length;
  let zeroes = 0;

  for (let i = len - 1; i >= 0; i--) {
    if (num[i] !== "0") break;

    zeroes++;
  }

  return num.slice(0, len - zeroes);
}

console.log(removeTrailingZeros("51230100")); // 512301
