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

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    function dfs(node: TreeNode | null) {
        if (!node) return;

        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }

    dfs(root);
    return result;
};
