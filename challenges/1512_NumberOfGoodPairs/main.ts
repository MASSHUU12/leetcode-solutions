console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

function numIdenticalPairs(nums: number[]): number {
  const numCounts: { [key: number]: number } = {};
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // Check if the number already exists in numCounts
    if (numCounts[num]) {
      // If it exists, increment the result by the current count
      result += numCounts[num];
      // Increment the count for the number
      numCounts[num]++;
    }
    // If the number doesn't exist in numCounts, initialize its count to 1
    else numCounts[num] = 1;
  }

  // Return the final result
  return result;
}
