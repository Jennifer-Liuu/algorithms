/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var swap = function(nums, a, b) {
  var temp = nums[a]
  nums[a] = nums[b]
  nums[b] = temp
}

var sortColors = function(nums) {
   let len = nums.length
   let head = 0
   let last = len - 1
   let middle = 0
   
   
   while(middle <= last) {
     if (nums[middle] === 1) {
       middle ++
     } else if (nums[middle] === 0) {
       swap(nums, middle, head)
       head ++
       middle++
     } else if (nums[middle] ===2) {
       swap(nums, middle, last)
       last --
     }
   }
};
var nums = [1,0,2,1,1,0]
sortColors(nums)


var 
