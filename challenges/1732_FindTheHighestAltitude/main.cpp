class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        int highest = gain[0];
        int current = gain[0];

        for (int i = 1; i < gain.size(); i++)
        {
            current += gain[i];

            if (current > highest) highest = current;
        }

        return highest < 0 ? 0 : highest;
    }
};
