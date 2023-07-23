class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function _allPossibleFBT(n: number): Array<TreeNode | null> {
  if (n % 2 === 0) return new Array<TreeNode>();

  const dp: Array<Array<TreeNode>> = [];
  for (let i = 0; i <= n; i++) {
    dp.push([]);
  }

  dp[1].push(new TreeNode(0));
  for (let count = 3; count <= n; count += 2) {
    for (let i = 1; i < count - 1; i += 2) {
      const j = count - 1 - i;
      for (const left of dp[i]) {
        for (const right of dp[j]) {
          const root = new TreeNode(0, left, right);
          dp[count].push(root);
        }
      }
    }
  }
  return dp[n];
}
