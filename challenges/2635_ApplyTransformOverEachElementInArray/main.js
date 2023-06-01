/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }

  return arr;
};

const fn = function plusOne(n) {
  return n + 1;
};

console.log(map([1, 2, 3], fn));
