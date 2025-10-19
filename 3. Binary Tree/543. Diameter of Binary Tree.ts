function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    maxDiameter = Math.max(maxDiameter, left + right);

    return 1 + Math.max(left, right);
  }

  dfs(root);
  return maxDiameter;
}
