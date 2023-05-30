console.log(buildArray([0, 2, 1, 5, 3, 4]));

function buildArray(nums: number[]): number[] {
  const len = nums.length;
  const result = Array<number>(len);

  for (let i = 0; i < len; i++) {
    result[i] = nums[nums[i]];
  }

  return result;
}
