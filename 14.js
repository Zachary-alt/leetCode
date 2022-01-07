// 最长公共前缀
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

//  

// 示例 1：

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：

// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。
//  

// 提示：

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 仅由小写英文字母组成

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(strs.length===1) return strs[0]
    let tag = true, index = 0
    while (tag) {
        strs.map((item) => {
            if (item.indexOf(strs[0].substring(0, index + 1)) !== 0 || item==='' || index>=item.length) {
                tag = false
                return
            }
        })
        index++
        console.log(index);
    }
    return strs[0].substring(0, index - 1)
};

console.log(longestCommonPrefix(["c","acc","ccc"]));