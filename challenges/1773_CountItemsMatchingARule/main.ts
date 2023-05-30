console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);

function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  let matching = 0;
  const keyIndex: { [key: string]: number } = {
    type: 0,
    color: 1,
    name: 2,
  };
  const ruleIndex = keyIndex[ruleKey];

  for (const item of items) {
    if (item[ruleIndex] === ruleValue) {
      matching++;
    }
  }

  return matching;
}
