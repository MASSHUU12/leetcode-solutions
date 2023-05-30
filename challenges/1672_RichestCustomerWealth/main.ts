console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);

function maximumWealth(accounts: number[][]): number {
  let richestWealth = 0;

  for (const account of accounts) {
    const sum = account.reduce((acc, val) => acc + val, 0);
    richestWealth = Math.max(richestWealth, sum);
  }

  return richestWealth;
}
