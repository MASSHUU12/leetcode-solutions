using System.Linq;

public class Solution {
    public int NumberOfEmployeesWhoMetTarget(int[] hours, int target) {
        return hours.Count(h => h >= target);
    }
}
