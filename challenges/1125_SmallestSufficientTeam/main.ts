function smallestSufficientTeam(
  req_skills: string[],
  people: string[][],
): number[] {
  if (req_skills.length === 0 || people.length === 0) return [];

  const numOfPeople = people.length;
  const numOfSkills = req_skills.length;
  const skillId = new Set<string>();
  const skillsMaskOfPerson = new Uint16Array(numOfPeople);
  const dp: number[] = [];

  // Converting skill to integers
  for (let i = 0; i < numOfSkills; i++) {
    skillId.add(req_skills[i]);
  }

  // Creating mask for each person
  for (let i = 0; i < numOfPeople; i++) {
    for (const skill of people[i]) {
      skillsMaskOfPerson[i] |= 1 << Array.from(skillId).indexOf(skill);
    }
  }

  dp.push(0);
  for (let skillsMask = 1; skillsMask < 1 << numOfSkills; skillsMask++) {
    dp.push(numOfPeople + 1); // Initialize with a value greater than the maximum number of people

    for (let i = 0; i < numOfPeople; i++) {
      const smallerSkillsMask = skillsMask & ~skillsMaskOfPerson[i];

      if (
        smallerSkillsMask !== skillsMask &&
        dp[smallerSkillsMask] + 1 < dp[skillsMask]
      )
        dp[skillsMask] = dp[smallerSkillsMask] + 1;
    }

    if (dp[skillsMask] === dp[skillsMask - 1])
      // No improvement in the previous skillsMask, copy the answer
      dp[skillsMask] = dp[skillsMask - 1];
  }

  const answer: number[] = [];
  let skillsMask = (1 << numOfSkills) - 1;

  for (let i = dp.length - 1; i > 0; i--) {
    const smallerSkillsMask = skillsMask & ~skillsMaskOfPerson[i - 1];

    if (dp[smallerSkillsMask] + 1 === dp[skillsMask]) {
      answer.unshift(i - 1);
      skillsMask = smallerSkillsMask;
    }
  }

  return answer;
}

console.log(
  smallestSufficientTeam(
    ["java", "nodejs", "reactjs"],
    [["java"], ["nodejs"], ["nodejs", "reactjs"]],
  ),
); // Should print [0,2]
