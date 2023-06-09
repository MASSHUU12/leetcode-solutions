class SubrectangleQueries {
  private rectangle: number[][];

  constructor(rectangle: number[][]) {
    this.rectangle = rectangle;
  }

  updateSubrectangle(
    row1: number,
    col1: number,
    row2: number,
    col2: number,
    newValue: number
  ): void {
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) this.rectangle[i][j] = newValue;
    }
  }

  getValue(row: number, col: number): number {
    return this.rectangle[row][col];
  }
}

const obj = new SubrectangleQueries([
  [1, 2, 1],
  [4, 3, 4],
  [3, 2, 1],
  [1, 1, 1],
]);
obj.updateSubrectangle(0, 0, 3, 2, 5);
console.log(obj.getValue(0, 2));
