/**
 * 编写一个程序，找到两个单链表相交的起始节点。
 * 如果两个链表没有交点，返回 null.
 * 在返回结果后，两个链表仍须保持原有的结构。
 * 可假定整个链表结构中没有循环。
 * 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 方法1： 利用set 记录A的节点，再遍历B查找相交节点
 * 注意点，set 需要保存整个节点而不是值，这样才能保证能够正确判重
 * 时间复杂度 O(m+n) 空间复杂度 O(m)/O(n)
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode1 = function(headA, headB) {
  let set = new Set()

  while(headA) {
    set.add(headA)
    headA = headA.next
  }

  while(headB) {
    if (set.has(headB)) {
      return headB
    }
    headB = headB.next
  }

  return null
}
/**
 * 方法2：双指针法，pa指向A，pb指向B，当pa遍历完成A后指向B，当pb遍历完B后指向B，两指针同步遍历
 * 因为A+B = B + A ，两指针同时遍历，必然同时指向相交节点或null
 * 时间复杂度 O(m+n) 空间复杂度 O(1)
 * @param {*} headA 
 * @param {*} headB 
 */
var getIntersectionNode2 = function(headA, headB) {

  let pa = headA
  let pb = headB

  while (pa !== pb) {

    pa = pa === null ? headB : pa.next
    pb = pb === null ? headA : pb.next
  }
  return pa
}
