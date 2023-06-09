function nextGreatestLetter(letters: string[], target: string): string {
  if (target >= letters[letters.length - 1]) return letters[0];

  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;

    if (letters[mid] <= target) left = mid + 1;
    else right = mid - 1;
  }

  return letters[left];
}

console.log(nextGreatestLetter(["c", "f", "j"], "a"));
