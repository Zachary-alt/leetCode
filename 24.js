// 两两交换链表中的节点
// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function (head) { // 递归
//     if (head === null || head.next === null) return head
//     const newHead = head.next
//     head.next = swapPairs(newHead.next)
//     newHead.next = head
//     return newHead
// };
var swapPairs = function (head) { // 迭代
    const newHead = new ListNode(0,head)
    let temp = newHead
    while (temp.next && temp.next.next) {
        let node1 = temp.next, node2 = temp.next.next
        temp.next = node2
        node1.next = node2.next
        node2.next = node1
        temp = node1
    }
    return newHead.next
};
let ln={ val: 4, next: { val: 3,next: { val: 2,next: { val: 1 } } } }
console.log(swapPairs(ln));