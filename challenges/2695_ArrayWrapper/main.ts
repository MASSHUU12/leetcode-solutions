class ArrayWrapper {
  private nums;

  constructor(nums: number[]) {
    this.nums = nums;
  }

  valueOf(): number {
    let sum = 0;

    for (let i = 0; i < this.nums.length; i++) {
      sum += this.nums[i];
    }

    return sum;
  }

  toString(): string {
    return `[${this.nums.join(",")}]`;
  }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
