console.log(sortSentence("is2 sentence4 This1 a3"));

function sortSentence(s: string): string {
  const result: string[] = Array(10);

  for (const word of s.split(" ")) {
    const index = parseInt(word[word.length - 1]);

    result[index] = word.substring(0, word.length - 1);
  }

  return result.join(" ").trim();
}
