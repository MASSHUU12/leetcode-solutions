function leftRightDifference(nums: number[]): number[] {
  const len = nums.length;
  const leftSum: number[] = Array(len).fill(0);
  const rightSum: number[] = Array(len).fill(0);
  const result: number[] = [];

  for (let i = 1; i < len; i++) {
    leftSum[i] = nums[i - 1] + leftSum[i - 1];
  }

  for (let i = len - 1; i >= 0; i--) {
    if (i === len - 1) continue;

    rightSum[i] = nums[i + 1] + rightSum[i + 1];
  }

  for (let i = 0; i < len; i++) {
    result.push(Math.abs(leftSum[i] - rightSum[i]));
  }

  return result;
}

console.log(leftRightDifference([10, 4, 8, 3]));
