// 合并K个升序链表
// 给你一个链表数组，每个链表都已经按升序排列。

// 请你将所有链表合并到一个升序链表中，返回合并后的链表。



// 示例 1：

// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// var mergeKLists = function (lists) {
//     let arr = [], res = new ListNode(null), temp = res
//     if (!lists.length) return null
//     if (lists.length === 1) return lists[0]
//     for (let item of lists) {
//         while (item) {
//             arr.push(item.val)
//             item = item.next
//         }
//     }
//     if (!arr.length) return null
//     arr.sort((a, b) => a - b)
//     for (let i = 0; i < arr.length; i++) {
//         temp.val = arr[i]
//         if (i !== arr.length - 1) {
//             temp.next = new ListNode()
//             temp = temp.next
//         }
//     }
//     return res
// };
// var mergeKLists = function (lists) { // 顺序合并
//     let res = null
//     if (!lists.length) return null
//     if (lists.length === 1) return lists[0]
//     for(let item of lists){
//         res = mergeTwoList(res,item)
//     }
//     return res
// };
var mergeKLists = function (lists) { // 分治合并
    return merge(lists, 0, lists.length - 1)
};
function merge(lists, l, r) {
    if (l === r) return lists[l]
    if (l > r) return null
    let mid = Math.floor((l + r) / 2)
    return mergeTwoList(merge(lists, l, mid), merge(lists, mid + 1, r))
}
function mergeTwoList(list1, list2) {
    if (!list1) return list2
    if (!list2) return list1
    let head = new ListNode(-1), temp = head
    while (list1 && list2) {
        if (list1.val < list2.val) {
            temp.next = list1
            list1 = list1.next
        } else {
            temp.next = list2
            list2 = list2.next
        }
        temp = temp.next
    }
    temp.next = list1 ? list1 : list2
    return head.next
}
let l1 = new ListNode(2, new ListNode(4, new ListNode(6)))
let l2 = new ListNode(3, new ListNode(7))
console.log(mergeKLists([l1, l2]));