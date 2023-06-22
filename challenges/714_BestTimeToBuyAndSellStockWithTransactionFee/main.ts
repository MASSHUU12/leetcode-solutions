function maxProfit(prices: number[], fee: number): number {
  const n = prices.length;
  let free = 0;
  let hold = -prices[0];

  for (let i = 1; i < n; i++) {
    const tmp = hold;
    hold = Math.max(hold, free - prices[i]);
    free = Math.max(free, tmp + prices[i] - fee);
  }

  return free;
}

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2)); // 8
