#include <iostream>
#include <vector>

class Solution
{
public:
  std::vector<int> getConcatenation(std::vector<int> &nums)
  {
    const int size = nums.size();
    std::vector<int> ans(size << 1);

    for (size_t i = 0; i < size; i++)
    {
      ans[i] = ans[i + size] = nums[i];
    }

    return ans;
  }
};

int main()
{
  std::vector<int> test = {1, 2, 1};

  Solution solution;
  std::vector<int> result = solution.getConcatenation(test);

  std::cout << "Vector elements: ";
  for (size_t i = 0; i < result.size(); i++)
  {
    std::cout << result[i] << " ";
  }
  std::cout << "\n";

  return 0;
}
