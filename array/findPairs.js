/**
 * 给定一个整数数组和一个整数 k, 你需要在数组里找到不同的 k-diff 数对。这里将 k-diff 数对定义为一个整数对 (i, j), 其中 i 和 j 都是数组中的数字，且两数之差的绝对值是 k.
 * 输入: [3, 1, 4, 1, 5], k = 2
 * 输出: 2
 * 解释: 数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
 * 尽管数组中有两个1，但我们只应返回不同的数对的数量。

 * 使用set 分别记录无重复数组和k-diff数对中的大数
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  const len = nums.length
  
  let n = new Set()
  let res = new Set()
  for(let i =0 ; i<len;i++) {
    if (n.has(nums[i] + k)) {
      res.add(nums[i] + k)
    }
    if (n.has(nums[i] - k)) {
      res.add(nums[i])
    }
    n.add(nums[i])
    console.log(n, res)
  }
  
  return res.size
};

console.log(findPairs([-1, -2, -3], 1))