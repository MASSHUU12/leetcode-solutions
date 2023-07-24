declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function () {
  return this.length > 0 ? this.at(this.length - 1) : -1;
};

const arr = [1, 2, 3];
const nums: number[] = [];

console.log(arr.last()); // 3
console.log(nums.last()); // -1

export {};
