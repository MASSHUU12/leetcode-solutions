console.log(finalValueAfterOperations(["--X", "X++", "X++"]));

function finalValueAfterOperations(operations: string[]): number {
  let result = 0;

  for (const operation of operations) {
    if (operation === "--X" || operation === "X--") result--;
    else result++;
  }

  return result;
}
