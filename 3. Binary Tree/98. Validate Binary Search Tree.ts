function isValidBST(root: TreeNode | null): boolean {
  function dfs(node: TreeNode | null, min: number, max: number): boolean {
    if (!node) return true;

    if (node.val <= min || node.val >= max) return false;

    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
  }

  return dfs(root, -Infinity, Infinity);
}
