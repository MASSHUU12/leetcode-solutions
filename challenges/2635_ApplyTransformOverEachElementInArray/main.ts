function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }

  return arr;
}

const fn = function plusOne(n: number) {
  return n + 1;
};

console.log(map([1, 2, 3], fn));
