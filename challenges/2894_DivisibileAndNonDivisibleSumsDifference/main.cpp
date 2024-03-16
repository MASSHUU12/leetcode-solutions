class Solution {
public:
    int differenceOfSums(int n, int m) {
        return ((n * (n + 1)) >> 1) - n / m * (n / m + 1) * m;
    }
};
