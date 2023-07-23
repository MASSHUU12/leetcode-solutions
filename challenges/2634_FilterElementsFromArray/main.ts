function filter(
  arr: number[],
  fn: (n: number, i: number) => unknown,
): number[] {
  return arr.reduce((res: number[], element: number, index: number) => {
    if (fn(element, index)) res.push(element);
    return res;
  }, []);
}

console.log(
  filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10;
  }),
); // [20,30]

console.log(
  filter([1, 2, 3], function firstIndex(_, i) {
    return i === 0;
  }),
); // [1]
