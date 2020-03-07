/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 给定一个二叉树，返回它的中序 遍历。
 * 输入: [1,null,2,3]
   1
    \
     2
    /
   3

* 输出: [1,3,2]
*/
/* 递归算法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let left = []
  let right = []
  
  if(!root) {
    return []
  }
  if (root.left) {
    left = inorderTraversal(root.left)
  }
  if(root.right) {
    right = inorderTraversal(root.right)
  }
  
  return [...left, root.val, ...right]
}

/**
 * 迭代算法
 * 算法核心：利用栈来记录节点顺序
 * 1. 如果左节点不空，一直压栈，
 * 2. 左节点为空时 出栈，记录，当前节点移动到右节点
 * 3. 1，2 循环至 没有节点或者空栈 
 */

 var inorderTraversal = function(root) {
  let stack = []
  let res = []
  let p = root
  while( p || stack.length) {
     while(p) {
       stack.push(p)
        p =p.left
     }
      p = stack.pop()
      res.push(p.val)
      p= p.right
  }
  return res
 }
