/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    let pos = []
    let min
    let max
    let len = words.length

    for(let i = 0; i< len; i ++) {
      if (word1 === words[i] || word2 === words[i]) {
        pos.push(i)
      }
    }

    min = Math.min(...pos)
    max = Math.max(...pos)
    return Math.min(max - min, min + len - max)
};

console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], 'practice', 'makes'))