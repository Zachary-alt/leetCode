// 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) { //O(n^2)
//     if (s.length === 1) return 1
//     let dp = [], maxLen = 0 // dp记录每个索引开始的结果
//     for (let i = 0; i < s.length; i++) {
//         if (s.length - i < maxLen) break
//         for (let j = i; j < s.length; j++) {
//             if (dp[i] && dp[i].indexOf(s[j]) > -1) {
//                 maxLen = dp[i].length > maxLen ? dp[i].length : maxLen
//                 break
//             } else {
//                 dp[i] = s.substring(i, j + 1)
//                 maxLen = dp[i].length > maxLen ? dp[i].length : maxLen
//             }
//         }
//     }
//     return maxLen
// };

// 总结为i-j之间滑动取值
var lengthOfLongestSubstring = function (s) { // 采用指针方式
    if (s.length === 1) return 1
    let temp = [], maxLen = 0; // temp记录指针间的结果
    let right=0 // 右指针
    for (let i = right; i < s.length; i++) {
        if(!temp.includes(s[i])){// 查看后面的值是否重复，没有则记录下来
            temp.push(s[i])
            maxLen = Math.max(maxLen,temp.length)
        }else{
            temp.shift()// 左指针向右移一位
            right=i-1// 记录右指针
            i=right// 重新从右指针开始
        }
    }
    return maxLen
};

console.log(lengthOfLongestSubstring("abcabcbb"));