console.log(countAsterisks("l|*e*et|c**o|*de|"));

function countAsterisks(s: string): number {
  let result = 0;
  let bars = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "|") {
      bars++;
      continue;
    }

    if ((bars & 1) === 0 && char === "*") result++;
  }

  return result;
}
