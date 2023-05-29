console.log(fizzBuzz(15));

function fizzBuzz(n: number): string[] {
  const answer = ["1"];

  for (let i = 2; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz");
      continue;
    }
    if (i % 3 === 0) {
      answer.push("Fizz");
      continue;
    }
    if (i % 5 === 0) {
      answer.push("Buzz");
      continue;
    }
    answer.push(`${i}`);
  }

  return answer;
}
