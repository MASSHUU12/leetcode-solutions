function lengthOfLongestSubstring(s: string): number {
  const charSet = new Set<string>();

  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    const currentChar = s.charAt(right);

    if (!charSet.has(currentChar)) {
      // If the character is not in the current substring, add it to the set
      charSet.add(currentChar);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    } else {
      // If the character is already in the substring, remove the leftmost character
      charSet.delete(s.charAt(left));
      left++;
    }
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
