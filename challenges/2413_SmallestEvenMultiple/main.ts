function smallestEvenMultiple(n: number): number {
  for (let i = 1; i <= 150; i++) {
    if (i % 2 === 0 && i % n === 0) return i;
  }

  return -1;
}

console.log(smallestEvenMultiple(5)); // Should be 10
console.log(smallestEvenMultiple(6)); // Should be 6
