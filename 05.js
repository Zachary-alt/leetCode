// 最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串。


// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) { // 动态规划
    /**
     * dp[i][j]表示s[i...j]是否为回文子串
     * 得到方程：dp[i][j] = (s[i]===s[j])   && dp[i+1][j-1]
     * 边界条件：j-i+1<2   ====>   j-i<3 //所有讨论是建立在子串长度大于 2 的前提之上
     * 初始化：所有长度为 1 的子串都是回文串
     */
    let len = s.length
    if (len < 2) return s
    let dp = init2Dp(len), maxLen = 1, begin = 0;
    for (let i = 0; i < len; i++) {
        dp[i][i] = true
    }
    // 先枚举子串长度
    for (let l = 2; l <= len; l++) {
        for (let i = 0; i < len; i++) {
            // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
            let j = l + i - 1
            if (j >= len) break;

            if (s[i] !== s[j]) {
                dp[i][j] = false
            } else {
                // 相等的情况下
                // 考虑头尾去掉以后没有字符剩余，或者剩下一个字符的时候，肯定是回文串
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }
            // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1
                begin = i
            }
        }
    }
    console.log(begin,maxLen);
    return s.substring(begin, begin + maxLen);
};
function init2Dp(x) {
    let dp = []
    for (let i = 0; i <= x; i++) {
        dp[i] = []
    }
    return dp
}

var longestPalindrome = function (s) { // 中心扩展算法
    let len = s.length
    if (len < 2) return s
    let maxLen=1,begin=0;
    for(let i=0;i<len;i++){
        // 奇数最长len
        let oddLen = expandAroundCenter(s,i,i)
        // 偶数最长len
        let evenLen = expandAroundCenter(s,i,i+1)
        let curMaxLen = Math.max(oddLen,evenLen)
        if(curMaxLen>maxLen){
            maxLen = curMaxLen
            // 纸上画图可找到规律 中心位置减去半径
            begin = i - parseInt((maxLen-1)/2)
        }
    }
    return s.substring(begin,begin+maxLen)
}
function expandAroundCenter(s,left,right){
    let len = s.length
    while(left>=0&&right<len){
        if(s[left]===s[right]){
            left--;
            right++;
        }else{
            break
        }
    }
    // 跳出while循环时，恰好满足s[left]!==s[right]
    // 因此此时的回文是不包括left和right的，需要去掉这两个字符
    return right-left-1; // right-left+1-2
}
console.log(longestPalindrome("cbbd"));
