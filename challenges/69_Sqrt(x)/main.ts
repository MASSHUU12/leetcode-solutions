console.log(mySqrt(9));

function mySqrt(x: number, epsilon = 0.05): number {
  if (x <= 0) return 0;
  if (x === 1) return 1;

  let low = 0;
  let high = Math.max(1, x);
  let guess = (low + high) / 2;

  while (Math.abs(guess * guess - x) > epsilon) {
    if (guess * guess > x) high = guess;
    else low = guess;
    guess = (low + high) / 2;
  }

  return Math.floor(guess);
}
