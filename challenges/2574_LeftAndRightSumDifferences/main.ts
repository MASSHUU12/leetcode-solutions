function leftRightDifference(nums: number[]): number[] {
  const len = nums.length;
  const result: number[] = new Array(len);

  let totalSum = 0;
  let leftSum = 0;

  for (let i = 0; i < len; i++) totalSum += nums[i];

  for (let i = 0; i < len; i++) {
    totalSum -= nums[i];
    result[i] = Math.abs(leftSum - totalSum);
    leftSum += nums[i];
  }

  return result;
}

console.log(leftRightDifference([10, 4, 8, 3]));
