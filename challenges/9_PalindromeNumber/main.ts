console.log(isPalindrome(121));

function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  const str = x.toString();
  const len = str.length;
  const mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) return false;
  }

  return true;
}
