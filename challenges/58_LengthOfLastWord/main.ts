console.log(lengthOfLastWord("luffy is still joyboy"));

function lengthOfLastWord(s: string): number {
  const trimmedString = s.trim();
  let length = 0;

  for (let i = trimmedString.length - 1; i >= 0; i--) {
    if (trimmedString[i] !== " ") length++;
    else break;
  }

  return length;
}
