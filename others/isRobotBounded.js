/**
 * 在无限的平面上，机器人最初位于 (0, 0) 处，面朝北方。机器人可以接受下列三条指令之一：
"G"：直走 1 个单位
"L"：左转 90 度
"R"：右转 90 度
机器人按顺序执行指令 instructions，并一直重复它们。

只有在平面中存在环使得机器人永远无法离开时，返回 true。否则，返回 false。


 * tip: 一次指令结束后，如果没有回到原点，只要方向与初始方向不同，最终会回到原点的
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  const len = instructions.length
  let x = 0
  let y = 0
  let direction = 0 // 初始北面 0,1,2,3, 顺时针

  for(let i = 0; i< len; i ++) {
    const ins = instructions[i]

    if (ins === 'L') {
      direction = (4 + direction - 1) %4
    }
    if (ins === 'R') {
      direction = (direction + 1) % 4
    }
    if (ins === 'G') {
      if (direction === 0) {
        y ++
      } else if (direction === 1) {
        x++
      } else if (direction === 2) {
        y --
      } else if(direction === 3) {
        x --
      }
    }
  }
  
  return (!x && !y) || direction !== 0 
};


console.log(isRobotBounded('GLGLGGLGL'))