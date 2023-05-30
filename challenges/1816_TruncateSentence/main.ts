console.log(truncateSentence("Hello how are you Contestant", 4));
console.log(truncateSentence("chopper is not a tanuki", 5));

function truncateSentence(s: string, k: number): string {
  let words = 0;
  let truncateIndex = s.length;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      words++;

      if (words === k) {
        truncateIndex = i;
        break;
      }
    }
  }

  return s.substring(0, truncateIndex);
}
