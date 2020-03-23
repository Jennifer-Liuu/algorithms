/**
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 * 解法与全排列相似
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = []
  let i = 1
  const len = nums.length

  var setFunc = function(temp, tLen, n) {
    if (temp.length === tLen) {
      res.push(temp)
    }
    const nLen = n.length

    for(let j = 0; j<nLen; j++) {
      const newNums = n.slice(j+1)
      setFunc([...temp, n[j]], tLen, newNums)
    }
  }
  while (i<=len) {
    setFunc([], i, nums ) 
    i++
  }
  return res
};

console.log(subsets([1,2,3, 4]))

