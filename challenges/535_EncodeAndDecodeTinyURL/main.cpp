#include <iostream>
#include <string>

class Solution
{
public:
    // Encodes a URL to a shortened URL.
    std::string encode(std::string longUrl)
    {
        return longUrl;
    }

    // Decodes a shortened URL to its original URL.
    std::string decode(std::string shortUrl)
    {
        return shortUrl;
    }
};

int main()
{
    Solution solution;

    std::cout << solution.decode(solution.encode("https://leetcode.com/problems/design-tinyurl"));

    return 0;
}
