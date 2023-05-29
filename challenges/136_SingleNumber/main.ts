console.log(singleNumber([4, 1, 2, 1, 2]));

function singleNumber(nums: number[]): number {
  let result = 0;

  for (const num of nums) {
    result ^= num;
  }

  return result;
}
