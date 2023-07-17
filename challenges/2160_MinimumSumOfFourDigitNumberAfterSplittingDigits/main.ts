function minimumSum(num: number): number {
  const numStr = num.toString();
  const digits: number[] = [];
  let min = 9;
  let max = 0;

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]);
    digits.push(digit);

    if (digit > max) max = digit;
    if (digit < min) min = digit;
  }

  // Remove max and min number
  digits.sort();
  digits.shift();
  digits.pop();

  return min * 10 + max + parseInt(digits.join(""));
}

console.log(minimumSum(2932)); // Should be [29, 23] = 52
console.log(minimumSum(4009)); // Should be [9, 4] = 13
