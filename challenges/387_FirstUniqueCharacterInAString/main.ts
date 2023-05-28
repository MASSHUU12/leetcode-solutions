console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("aabb"));

function firstUniqChar(s: string): number {
  const charCounts = new Map<string, number>();

  // Count the occurrences of each character
  for (const char of s) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  // Find the first non-repeating character and return its index
  for (let i = 0; i < s.length; i++) {
    if (charCounts.get(s[i]) === 1) return i;
  }

  // No non-repeating character found
  return -1;
}
