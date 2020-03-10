/**
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

 * @param {string[]} strs
 * @return {string[][]}
 */

 /**
  * 将排序后的str的作为hash 值，记录 map 
  * 时间复杂度 O(NKlogK)
  * @param {*} strs 
  */
var groupAnagrams1 = function(strs) {
  let res = {}

  for(let j = 0; j < strs.length; j++ ) {
    let key = strs[j].split('').sort().join('')

    if (!res[key]) {
      res[key] = [strs[j]]
    } else {
      res[key].push(strs[j])
    }
  }

  return Object.keys(res).reduce((sum, cur) => [...sum, res[cur]], [])
};

/**
 * 与1不用之处 是使用Map替代object 存储表
 * hint： Object.values() 返回一个给定对象自身的所有可枚举属性值的数组
 * @param {*} strs 
 */
var groupAnagrams2 = function(strs) {
  let res = new Map()

  for(let j = 0; j < strs.length; j++ ) {
    let key = strs[j].split('').sort().join('')
    if (res.has(key)) {

      res.set(key, [...res.get(key), strs[j]])
    } else {
      res.set(key, [strs[j]])
    }
  }
  return Array.from(res.values())
}

/**
 * [recommend]
 * 基于算术基本定理来创造hash值
 * 算术基本定理： 算术基本定理可表述为：任何一个大于1的自然数 N,如果N不为质数，那么N可以唯一分解成有限个质数的乘积
 * @param {*} strs 
 */
var groupAnagrams = function(strs) {
  let res = {}
  let list = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]

  for(let j = 0; j < strs.length; j++ ) {
    let key = strs[j].split('').reduce((sum, cur) =>  sum * list[cur.charCodeAt(0) - 97],  1)
    if (!res[key]) {
      res[key] = [strs[j]]
    } else {
      res[key].push(strs[j])
    }
  }

  return Object.values(res)
};


console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]))
