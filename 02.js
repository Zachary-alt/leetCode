// 两数相加
// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0)

    if(!l1) return l2
    if(!l2) return l1

    let sum = l1.val+l2.val
    res.val = sum%10
    let tmp = parseInt(sum/10) //保留整数部分
    if(tmp>0){
        if(l1.next&&l2.next){ // 防止进位时有，刚好大于9
            l1.next.val+=tmp
        }else if(!l1.next){
            l1.next=new ListNode(tmp)
        }else if(!l2.next){
            l2.next=new ListNode(tmp)
        }
    }
    res.next= addTwoNumbers(l1.next,l2.next)
    return res
 }

 let l1 = new ListNode(2,{val:4,next:{val:3}})
 let l2 = new ListNode(5,{val:6,next:{val:4}})
 console.log(addTwoNumbers(l1,l2));