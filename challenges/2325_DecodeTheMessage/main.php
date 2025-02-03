<?php

class Solution
{
  /**
   * @param String $key
   * @param String $message
   * @return String
   */
  function decodeMessage(string $key, string $message): string
  {
    $mapping = array_flip(str_split($key));
    $char = 97;

    foreach ($mapping as $k => $v) {
      $mapping[$k] = $k == " " ? " " : chr($char++);
    }

    return strtr($message, $mapping);
  }
}

function main(): void
{
  $s = new Solution();
  $key = "the quick brown fox jumps over the lazy dog";
  $message = "vkbs bs t suepuv";
  $expected = "this is a secret";

  echo "Actual: " .
    $s->decodeMessage($key, $message) .
    ", expected: " .
    $expected .
    "\n";
}

main();
