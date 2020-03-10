/**
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 解法： 将第一个元素剔除，对剩余进行全排列，递归缩小范围，直至只剩一个
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = []

  let mute = function(nums, temp) {
    let len = nums.length
  
    if (len === 0) {
       res.push(temp)
    }
    for(let i = 0; i< len; i ++){
      const newNums = [...nums.slice(0, i), ...nums.slice(i+1, len)] 
     mute(newNums, [...temp, nums[i]])
    }
  }
  mute(nums, [])

  return res
}




console.log(permute([1]))