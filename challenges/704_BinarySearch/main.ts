function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const m = (l + r) >> 1;

    if (nums[m] === target) return m;
    if (nums[m] < target) l = m + 1;
    else r = m - 1;
  }
  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
