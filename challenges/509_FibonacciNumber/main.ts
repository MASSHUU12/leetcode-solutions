console.log(fib(12));

function fib(n: number): number {
  let currentNumber = 1;
  let fibMinus1 = 1;
  let fibMinus2 = 0;

  if (n <= 1) return n;

  for (let i = 3; i <= n; i++) {
    fibMinus2 = fibMinus1;
    fibMinus1 = currentNumber;
    currentNumber = fibMinus1 + fibMinus2;
  }

  return currentNumber;
}
