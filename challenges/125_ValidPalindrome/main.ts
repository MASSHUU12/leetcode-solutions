console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("0P"));

function isPalindrome(s: string): boolean {
  let clean = "";
  let length = s.length;

  for (let i = 0; i < length; i++) {
    const char = s[i].toLowerCase();
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9"))
      clean += char;
  }

  length = clean.length;

  for (let i = 0; i < length / 2; i++) {
    if (clean[i] !== clean[length - i - 1]) return false;
  }

  return true;
}
