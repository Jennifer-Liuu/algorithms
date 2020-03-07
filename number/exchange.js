/**
 * 不适用临时变量 交换两个数字
 */
const exchange1 = () => {
  let a = 65
  let b = 72

  [a, b] = [b,a]
  console.log(a, b)
}

/**
 * [10,5,11,7,8,9]
 */
const diffValue = (nums) => {
  let min = nums[0]
  let max = nums[0]

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    
    min = Math.min(element, min)

    max = Math.max(max, element)
  }
  return max-min
}

// exchange1()

console.log(diffValue([10,5,11,7,8,9]))