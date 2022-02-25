// 给定一个字符串 s ，通过将字符串 s 中的每个字母转变大小写，我们可以获得一个新的字符串。

// 返回 所有可能得到的字符串集合 。以 任意顺序 返回输出。

//  

// 示例 1：

// 输入：s = "a1b2"
// 输出：["a1b2", "a1B2", "A1b2", "A1B2"]

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    const ans = []
    const backtrack = (str, i) => {
        if (i === s.length) {
            return ans.push(str)
        }
        const cur = s[i]
        if (/[A-Za-z]/.test(cur)) {
            const low = str + cur.toLowerCase(), high = str + cur.toUpperCase()
            backtrack(low, i + 1)
            backtrack(high, i + 1)
        } else {
            backtrack(str + cur, i + 1)
        }
    }
    backtrack('', 0)
    return ans
};

console.log(letterCasePermutation("a1b2"));