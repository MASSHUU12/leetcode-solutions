function decompressRLElist(nums: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < nums.length; i += 2) {
    let freq = nums[i];
    const val = nums[i + 1];

    while (freq-- > 0) result.push(val);
  }

  return result;
}

console.log(decompressRLElist([1, 2, 3, 4])); // Should print [2,4,4,4]
