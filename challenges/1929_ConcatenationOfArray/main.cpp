#include <iostream>
#include <vector>

class Solution
{
public:
  std::vector<int> getConcatenation(std::vector<int> &nums)
  {
    const int size = nums.size();

    for (int i = 0; i < size; i++)
    {
      nums.push_back(nums[i]);
    }

    return nums;
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
