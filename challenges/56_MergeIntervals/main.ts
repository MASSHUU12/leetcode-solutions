function merge(intervals: number[][]): number[][] {
  const result: number[][] = [];

  intervals.sort((a, b) => a[0] - b[0]);

  result.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    const [, prevEnd] = result[result.length - 1];
    const [currentStart, currentEnd] = intervals[i];

    if (prevEnd >= currentStart)
      result[result.length - 1][1] = Math.max(prevEnd, currentEnd);
    else result.push(intervals[i]);
  }

  return result;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
); // [[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 1],
    [2, 2],
    [0, 0],
    [2, 3],
    [1, 3],
    [3, 5],
    [2, 3],
    [3, 5],
  ]),
); // [[0, 0], [1, 5]]
