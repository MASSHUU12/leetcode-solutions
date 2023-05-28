console.log(climbStairs(3));

function climbStairs(n: number): number {
  const nums: number[] = new Array(n + 1).fill(1);

  if (n <= 2) return n;

  nums[2] = 2;

  for (let i = 3; i <= n; i++) {
    nums[i] = nums[i - 1] + nums[i - 2];
  }

  return nums[n];
}
