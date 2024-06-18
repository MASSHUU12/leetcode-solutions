#include <iostream>
#include <algorithm>

class Solution
{
public:
  std::string reversePrefix(const std::string &word, const char &ch)
  {
    ushort char_index = word.find(ch);

    if (char_index > word.size())
      return word;

    std::string result = word.substr(0, char_index + 1);
    std::reverse(result.begin(), result.end());

    return result + word.substr(char_index + 1);
  }
};

int main()
{
  Solution solution;

  std::cout << "abcdefd" << " | " << solution.reversePrefix("abcdefd", 'd') << " | " << "dcbaefd\n";
  std::cout << "abcd" << " | " << solution.reversePrefix("abcd", 'z') << " | " << "abcd\n";

  return 0;
}
