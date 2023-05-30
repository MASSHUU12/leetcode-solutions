console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);

function mostWordsFound(sentences: string[]): number {
  let mostWords = -1;

  for (const sentence of sentences) {
    if (sentence.length === 0) continue; // Skip empty sentences

    const len = sentence.split(/\s+/).length;

    if (len > mostWords) {
      mostWords = len;
    }
  }

  return mostWords;
}
