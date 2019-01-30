/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const result = [];
    const frontier = [root];
    while (frontier.length) {
        const node = frontier.pop();
        result.push(node && node.val);
        node && frontier.push(node.right);
        node && frontier.push(node.left);
        
    }
    return result.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const values = data.split(',').map(v => v === '' ? null : Number(v));

    const inner = (values) => {
        if (!values.length) {
            return null;
        }

        const node = values.shift();

        if (node === null) {
            return null;
        }

        const root = new TreeNode(node);
        
        root.left = inner(values);
        root.right = inner(values);
        
        return root;
    }

    return inner(values);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
