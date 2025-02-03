<?php

class Solution
{
  /**
   * @param String $s
   * @return Integer
   */
  function minOperations(string $s): int
  {
    $c0 = 0;
    $c1 = 0;

    for ($i = 0; $i < strlen($s); $i++) {
      if ($s[$i] !== ($i % 2 ? "1" : "0")) {
        $c0++;
      }
      if ($s[$i] !== ($i % 2 ? "0" : "1")) {
        $c1++;
      }
    }

    return min($c0, $c1);
  }
}

function main(): void
{
  $sol = new Solution();
  $s = "0100";

  echo "Actual: " . $sol->minOperations($s) . ", expected: " . 1 . "\n";
}

main();
