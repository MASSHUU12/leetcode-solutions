console.log(maximum69Number(9669));

function maximum69Number(num: number): number {
  const digits = num.toString().split("");

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === "6") {
      digits[i] = "9";
      return parseInt(digits.join(""));
    }
  }

  return num;
}
