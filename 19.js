// 删除链表的倒数第 N 个结点
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//  双指针法
//  让前后指针forward和backward相差为n后同时向后推进
//  则当forward到达终点，即forward.next为null时
//  backward恰好到达倒数第n项的前一项
//  连接倒数第n项的前后项
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0,head)
    let forword = dummy,backword=dummy
    while(n--){
        forword= forword.next
    }
    while(forword.next){
        forword= forword.next
        backword= backword.next
    }
    backword.next=backword.next.next
    return dummy.next
};

 // 栈法
//  利用先入后出原则
// var removeNthFromEnd = function (head, n) {
//     let stack = [], dummy = new ListNode(0,head) // 多加一个头部节点，防止只有一个节点的情况出错
//     let cur = dummy
//     while (cur) {
//         console.log(cur);
//         stack.push(cur)
//         cur = cur.next
//     }
//     for(let i =1;i<=n;i++){
//         stack.pop()
//     }
//     let peek = stack[stack.length-1]
//     peek.next = peek.next.next
//     return dummy.next
// };

console.log(removeNthFromEnd({ val: 4, next: { val: 3,next: { val: 2,next: { val: 1 } } } }, 2));