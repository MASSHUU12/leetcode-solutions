<?php

declare(strict_types=1);

class Solution
{

  /**
   * @param float $celsius
   * @return float[]
   */
  function convertTemperature(float $celsius)
  {
    return [$celsius + 273.15, $celsius * 1.8 + 32];
  }
}
