console.log(getConcatenation([1, 2, 1]));

function getConcatenation(nums: number[]): number[] {
  return nums.concat(nums);
}
