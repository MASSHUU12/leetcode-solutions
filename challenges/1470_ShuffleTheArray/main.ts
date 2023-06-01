function shuffle(nums: number[], n: number): number[] {
  const result: number[] = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }

  return result;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
