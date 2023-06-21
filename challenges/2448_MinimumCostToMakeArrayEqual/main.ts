function minCost(nums: number[], cost: number[]): number {
  let left = Math.min(...nums);
  let right = Math.max(...nums);
  let answer = getCost(nums, cost, nums[0]);

  while (left < right) {
    const mid = (left + right) >> 1;
    const cost1 = getCost(nums, cost, mid);
    const cost2 = getCost(nums, cost, mid + 1);

    answer = Math.min(cost1, cost2);

    if (cost1 > cost2) left = mid + 1;
    else right = mid;
  }

  return answer;
}

function getCost(nums: number[], cost: number[], base: number): number {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result += 1 * Math.abs(nums[i] - base) * cost[i];
  }

  return result;
}

console.log(minCost([1, 3, 5, 2], [2, 3, 1, 14])); // 8
