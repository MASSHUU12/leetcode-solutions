function knightProbability(
  n: number,
  k: number,
  row: number,
  column: number,
): number {
  const directions = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];
  const reciprocal = 1 / 8;

  let dp: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));
  dp[row][column] = 1.0;

  for (let movesMade = 1; movesMade <= k; movesMade++) {
    const newDp: number[][] = new Array(n)
      .fill(0)
      .map(() => new Array(n).fill(0));

    // Iterate over the cells
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // Check if the cell is within the chessboard
        if (dp[i][j] > 0) {
          // Iterate over possible directions
          for (const [dx, dy] of directions) {
            const nextI = i + dx;
            const nextJ = j + dy;

            // Check if the next cell is within the chessboard
            if (nextI >= 0 && nextI < n && nextJ >= 0 && nextJ < n) {
              newDp[nextI][nextJ] += dp[i][j] * reciprocal;
            }
          }
        }
      }
    }
    dp = newDp; // Update the current probabilities for the next iteration
  }

  // Calculate total probability
  let totalProbability = 0.0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      totalProbability += dp[i][j];
    }
  }

  return totalProbability;
}

console.log(knightProbability(3, 2, 0, 0)); // 0.06250
console.log(knightProbability(1, 0, 0, 0)); // 1.00000
console.log(knightProbability(3, 1, 0, 0)); // 0.25000
