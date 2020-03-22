/**
 * 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 初始状态下，所有 next 指针都被设置为 NULL。
 */
/**
 * 解法1： 使用递归。每个目标节点next指向其右节点，递归指定左右子节点的右节点
 * @param {Node} root
 * @return {Node}
 */
var connect1 = function(root) {
   nextToRight1(root, null)

   return root
};


var nextToRight1 = function(left, right) {
  if (left) {
    left.next = right
    nextToRight(left.left, left.right)
    nextToRight(left.right, right ? right.left : null)
  }
  
}

/**
 * 解法2： 广度遍历二叉树。按层级遍历二叉树，节点存与队列
 * @param {*} root 
 */
var connect = function(root) {
  let q = [root]
  
  while(q.length > 0) {
    const len = q.length // 当前队列长度 --> 当前层级节点个数
    for(let i = 0 ; i< len; i++) {
      const node = q.shift() // 移除队列第一个节点

      node.next = i+1 < len ? q[0] : null // 判断是否为当前层级末尾节点，next 指向null
      if (node.right) {
        q.push(node.right)        
      }      
      if (node.left) {
        q.push(node.left)
      }
    }
  }
  return root
}


var getNodeByLevel = function(q) {

    return q
  }
}

