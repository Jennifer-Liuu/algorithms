/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let aNode = l1
  let bNode = l2
  let head = new ListNode()
  let cNode = head
  let temp = 0

  while(aNode!==null || bNode !== null) {
    
    const sum = aNode.val + bNode.val
    cNode.val = sum % 10 + temp

    temp = Math.floor(sum / 10)

    console.log(cNode)

    cNode.next = new ListNode()
  
    cNode = cNode.next  
    aNode = aNode.next
    bNode = bNode.next
  }
  
  
  
  if (aNode!==null) {
  
    cNode.val = aNode.val + temp
    cNode.next = aNode.next
  }
  if (bNode!==null) {
    cNode.val = bNode.val + temp
    cNode.next = bNode.next
  }
  
  console.log(cNode)

  return head
};

/**
 * [recommended] 
 * @point1 : 使用DummyNode 弥补了尾部节点不同步的情况，否则还要想办法删除最后一个废节点
 * @point2 : 链表长度不同使  用 0 补全 短链表
 * @point3 ：do while 效率高于while/ for ， 如果可以尽量使用简单运算符 效率高 
 * @point4 : constructor 需要new ！！！（stupid）
 */
var addTwoNumbers = function(l1, l2) {
  let aNode = l1
  let bNode = l2
  let head = new ListNode(0)
  let cNode = head
  let temp = 0

  do {
    const a = aNode ? aNode.val : 0
    const b = bNode ? bNode.val : 0
    const sum = a + b + temp

    temp = sum > 9 ? 1 : 0
    cNode.next = new ListNode(sum >= 10 ? sum - 10 :sum)
    
    cNode = cNode.next
    aNode = aNode ? aNode.next : null
    bNode = bNode ? bNode.next : null
  } while(aNode !== null || bNode !== null)

    if(temp > 0) {
        cNode.next = new ListNode(1)
    }

  return head.next
};
