console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));

function checkIfPangram(sentence: string): boolean {
  const chars = new Set();

  if (sentence.length < 26) return false;

  for (let i = 0; i < sentence.length; i++) {
    chars.add(sentence[i]);
  }

  return chars.size === 26;
}
