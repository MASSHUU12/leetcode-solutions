/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let zeroIndex = 0;
  let nonZeroCount = 0;

  for (let i = 0; i < nums.length && nonZeroCount < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== zeroIndex) {
        nums[zeroIndex] = nums[i];
        nums[i] = 0;
      }
      zeroIndex++;
      nonZeroCount++;
    }
  }
}
