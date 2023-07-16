function theMaximumAchievableX(num: number, t: number): number {
  return num + (t << 1);
}

console.log(theMaximumAchievableX(4, 1));
