console.log(numJewelsInStones("aA", "aAAbbbb"));

function numJewelsInStones(jewels: string, stones: string): number {
  const jewelSet = new Set(jewels);
  let count = 0;

  for (const stone of stones) {
    jewelSet.has(stone) && count++;
  }

  return count;
}
