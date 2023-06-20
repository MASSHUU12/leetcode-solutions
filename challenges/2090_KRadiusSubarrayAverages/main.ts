function getAverages(nums: number[], k: number): number[] {
  const avgs: number[] = new Array(nums.length).fill(-1);
  const windowSize = (k << 1) + 1;
  let sum = 0;

  for (let i = 0; i < windowSize; i++) {
    sum += nums[i];
  }

  for (let i = k; i < nums.length - k; i++) {
    avgs[i] = Math.floor(sum / windowSize);
    sum = sum - nums[i - k] + nums[i + k + 1];
  }

  return avgs;
}

console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3)); // [-1,-1,-1,5,4,4,-1,-1,-1]
