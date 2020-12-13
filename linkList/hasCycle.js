/**
    给定一个链表，判断链表中是否有环。

    如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

    如果链表中存在环，则返回 true 。 否则，返回 false
    你能用 O(1)（即，常量）内存解决此问题吗？
 */



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 时间复杂度 O(N*N)
 * 空间复杂度 O(N)
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let list = []
    let p = head
    while(p) {

        if (list.indexOf(p.next) ) {
            return true
        }
        list.push(p)
        p = p.next
    }
    return false
};

/**
 * 时间复杂度 O(N)
 * 空间复杂度 O(N)
 * @param {*} head 
 */
var hasCycle = function(head) {
    let set = new Set()
    let p =head
    while(p) {
        if (set.has(p.next)) {
            return true
        }
        p = p.next
    }
    return false
};

/**
 * 时间复杂度 O(N^M)
 * 空间复杂度 O(1)
 * @param {*} head 
 */
var hasCycle = function(head) {
    if(!head) return false
    let p = head
    
    let q = head.next
    while(p != q) {
        if(!q || !q.next || !p ) return false
        p = p.next
        q = q.next.next
    }
    return true
};