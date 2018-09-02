const getLeaves = (node, leaves) => {
    if (!node.left && !node.right) {
        leaves.push(node);
    }
    node.left && getLeaves(node.left, leaves);
    node.right && getLeaves(node.right, leaves);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const r1leaves = [];
    const r2leaves = [];
    getLeaves(root1, r1leaves);
    getLeaves(root2, r2leaves);

    for (let i = 0; i < r1leaves.length; i++) {
        const r1v = r1leaves[i].val;
        const r2v = r2leaves[i].val;
        if (r1v !== r2v) {
            return false;
        }
    }
    return r1leaves.length === r2leaves.length;
};
