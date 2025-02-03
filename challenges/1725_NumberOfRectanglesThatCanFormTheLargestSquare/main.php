<?php

class Solution
{
  /**
   * @param Integer[][] $rectangles
   * @return Integer
   */
  function countGoodRectangles($rectangles): int
  {
    $max = 0;
    $count = 0;

    foreach ($rectangles as $r) {
      $min = min($r[0], $r[1]);
      if ($min > $max) {
        $max = $min;
        $count = 1;
      } elseif ($min === $max) {
        $count++;
      }
    }

    return $count;
  }
}

function main()
{
  $s = new Solution();

  echo "Actual: " .
    $s->countGoodRectangles([[5, 8], [3, 9], [5, 12], [16, 5]]) .
    ", expected: " .
    3 .
    "\n";
}

main();
