class Solution {
public:
    int countDigits(int num) {
        int result = 0, n = num;

        while (n != 0)
        {
            const int l = n % 10;
            n /= 10;

            result += num % l == 0;
        }

        return result;
    }
};
