#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>
#include <sstream>
#include <unordered_map>

class Solution {
public:
    std::vector<std::vector<std::string>> groupAnagrams(std::vector<std::string> &strs) {
        std::unordered_map<std::string, std::vector<std::string>> anagrams_map{};

        for (const std::string &word: strs) {
            std::string sorted_word = word;
            std::sort(sorted_word.begin(), sorted_word.end());

            anagrams_map[sorted_word].push_back(word);
        }

        std::vector<std::vector<std::string>> result;
        result.reserve(anagrams_map.size());

        for (const auto &entry : anagrams_map)
            result.push_back(entry.second);

        return result;
    }
};

int main() {
    Solution solution;
    std::stringstream ss;

    std::vector<std::string> test_case = {"eat", "tea", "tan", "ate", "nat", "bat"};
    auto grouped = solution.groupAnagrams(test_case);

    /// Expected:
    /// [bat]
    /// [nat, tan]
    /// [ate, eat, tea]
    for (const auto &vec: grouped) {
        for (const auto &str: vec)
            ss << str << ' ';

        ss << '\n';
    }

    std::cout << ss.str();

    return 0;
}
