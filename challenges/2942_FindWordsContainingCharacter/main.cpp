class Solution {
public:
    vector<int> findWordsContaining(vector<string>& words, char x) {
        auto result = new vector<int>();

        for (int i = 0; i < words.size(); i++)
        {
            string word = words[i];

            for (int j = 0; j < word.length(); j++)
            {
                if (word[j] != x) continue;

                result->push_back(i);
                break;
            }
        }

        return *result;
    }
};
