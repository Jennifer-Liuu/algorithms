/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum1 = function(nums) {
   const len = nums.length
  
   if (len < 3) {
     return []
   }

   if (len === 3 && nums.reduce((sum, cur) => sum + cur, 0) === 0) {
     return [nums]
   }
   let res = []

   let newNums = nums.sort((a, b) => a - b)
   
   if (newNums[0]> 0) {
     return []
   }

   if (newNums[len - 1]<0) {
     return []
   }

   for(let i = 0 ; i< len -2; i++) {
    if (newNums[i] === newNums[i-1]) {
      continue
    }

    for(let j = len - 1 ; j> 2; j--) {
      if (newNums[j] === newNums[j+1]) {
        continue
      }
      const a = newNums[i]
      const b = newNums[j]
      const c = -(a+b)

      for(k = i+1; k<j;k++) {
        if (newNums[k] === c) {
          res.push([newNums[i], newNums[k], newNums[j]])
          break
        }
      }
    }
   }
   return res
};


// recoomend
var threeSum = function(nums) {
  const len = nums.length
 
  if (len < 3) {
    return []
  }

  let res = []

  let newNums = nums.sort((a, b) => a - b) // 对数组排序
  
  if (newNums[0]> 0) {
    return []
  }

  if (newNums[len - 1]<0) {
    return []
  }


  for(let i = 0 ; newNums[i] <= 0; i++) { // 固定遍历负数值即可，a+b+c= 0 肯定有值为负数
    if (newNums[i] === newNums[i-1]) {
      continue
    }

    for(let k = i + 1, j= len - 1; k<j ;) {

      const sum = newNums[i] + newNums[k] + newNums[j]
      
      if (sum === 0) { // 计算数据做比对
        res.push([newNums[i], newNums[k], newNums[j]])
 
        while (k < j && newNums[k] === newNums[k+1]) { // 去重
          k++
        }
        while (k< j && newNums[j] === newNums[j-1]) { // 去重
          j--
        }
        k++ // 去重后移动前后指针
        j-- 
      }
      if (sum < 0) { // 如果比对值过小，左指针移动
        k++
      }
      if (sum > 0) { // 如果比对值过大，右指针移动
        j--
      }
    }
  }
  return res
};

const res = threeSum([-2, -2, 0, 2, 2, -1, -4])
console.log(JSON.stringify(res))