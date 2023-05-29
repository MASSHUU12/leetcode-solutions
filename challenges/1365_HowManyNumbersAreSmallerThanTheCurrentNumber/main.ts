console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

function smallerNumbersThanCurrent(nums: number[]): number[] {
  const count = new Array(101).fill(0); // Counting array for numbers from 0 to 100
  const result: number[] = [];

  // Count the occurrences of each number
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
  }

  // Calculate the running sum of counts
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Calculate the number of smaller numbers for each element
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] === 0 ? 0 : count[nums[i] - 1]);
  }

  return result;
}
