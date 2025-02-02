<?php

class Solution
{
  /**
   * @param String $sentence
   * @param String $searchWord
   * @return Integer
   */
  function isPrefixOfWord(string $sentence, string $searchWord): int
  {
    $words = explode(" ", $sentence);

    foreach ($words as $i => $word) {
      if (str_starts_with($word, $searchWord)) {
        return $i + 1;
      }
    }

    return -1;
  }
}

function main(): int
{
  $s = new Solution();

  echo "Actual: " .
    $s->isPrefixOfWord("i love eating burger", "burg") .
    ", expected: " .
    4 .
    "\n";

  return 0;
}

main();
