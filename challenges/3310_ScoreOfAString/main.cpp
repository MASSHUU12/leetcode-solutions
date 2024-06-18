#include <iostream>

class Solution
{
public:
  int scoreOfString(const std::string &s)
  {
    int score = 0;
    const ushort size = s.size();

    for (ushort i = 1; i < size; i++)
      score += std::abs(s[i] - s[i - 1]);

    return score;
  }
};

int main()
{
  Solution solution;

  printf("%s | Expected: %d, Actual: %d\n", "hello", 13, solution.scoreOfString("hello"));

  return 0;
}
