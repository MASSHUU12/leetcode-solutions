function countNegatives(grid: number[][]): number {
  let result = 0;
  let row = 0;
  let col = grid[0].length - 1;

  while (row < grid.length && col >= 0) {
    if (grid[row][col] < 0) {
      result += grid.length - row; // Count all remaining elements in the column
      col--;
    } else row++;
  }

  return result;
}

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
