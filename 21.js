// 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2
    if (!list2) return list1
    let res = new ListNode(-1), temp = res
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
    return res.next
};
let l1 = new ListNode(2, new ListNode(4, new ListNode(6)))
let l2 = new ListNode(3, new ListNode(7))
console.log(mergeTwoLists(l1, l2));