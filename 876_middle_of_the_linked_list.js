/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let size = 0;
    let node = head;
    const nodes = {};

    while (node) {
        nodes[size] = node;
        size++;
        node = node.next;
    }

    const middleIndex = Math.ceil((size - 1) / 2);
    return nodes[middleIndex];
};
