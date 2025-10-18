function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const n = queue.length;
    const currLevel: number[] = [];

    for (let i = 0; i < n; i++) {
      let node = queue.shift()!;
      currLevel.push(node.val);
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currLevel);
  }

  return result;
}
