console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));

function createTargetArray(nums: number[], index: number[]): number[] {
  const target: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const idx = index[i];

    target.splice(idx, 0, num);
  }

  return target;
}
