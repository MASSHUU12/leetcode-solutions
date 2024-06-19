#include <iostream>

class Solution
{
public:
  int strStr(std::string haystack, std::string needle)
  {
    const std::size_t haystack_size = haystack.size();
    const std::size_t needle_size = needle.size();

    if (needle_size > haystack_size)
      return -1;

    for (std::size_t i = 0; i <= haystack_size - needle_size; i++)
    {
      if (haystack.find(needle, i) == i)
        return i;
    }

    return -1;
  }
};

int main()
{
  Solution solution;

  std::cout << "sadbutsad" << " | " << solution.strStr("sadbutsad", "sad") << " | " << "0\n";
  std::cout << "zsgbutsad" << " | " << solution.strStr("zsgbutsad", "sad") << " | " << "6\n";
  std::cout << "leetcode" << " | " << solution.strStr("leetcode", "leeto") << " | " << "-1\n";
  std::cout << "a" << " | " << solution.strStr("a", "a") << " | " << "0\n";
  std::cout << "aaa" << " | " << solution.strStr("aaa", "aaaa") << " | " << "-1\n";

  return 0;
}
