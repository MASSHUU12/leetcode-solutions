console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const result: boolean[] = Array(candies.length).fill(false);
  let max = 0;

  for (let i = 0; i < candies.length; i++) {
    const num = candies[i];

    if (num > max) max = num;
  }

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) result[i] = true;
  }

  return result;
}
