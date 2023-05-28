console.log(generate(5));

function generate(numRows: number): number[][] {
  const triangle: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const mid = Math.floor((i + 1) / 2); // Calculate half of the row

    triangle[i] = new Array(i + 1).fill(1);

    for (let j = 0; j <= mid; j++) {
      if (j === 0 || j === i) triangle[i][j] = 1;
      else {
        const value = triangle[i - 1][j - 1] + triangle[i - 1][j];
        triangle[i][j] = value;
        triangle[i][i - j] = value; // Mirror the value to the other half of the row
      }
    }
  }
  return triangle;
}
