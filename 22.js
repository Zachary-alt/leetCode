// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

//  

// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let ans = []
    const dfs = (str, left, right) => {
        if (!left && !right) {
            return ans.push(str)
        }
        if (left > right) return
        if (left) dfs(str + '(', left - 1, right)
        if (left <= right) dfs(str + ')', left, right - 1)
    }
    dfs('', n, n)
    return ans
};
var generateParenthesis = function (n) {
    let res = [];
    // 用leftRemain记录还可以使用多少个左括号，用rightRemain记录还可以使用多少个右括号
    const backtrack = (leftRemain, rightRemain, str) => {
      // 左右括号所剩的数量，str是当前构建的字符串
      if (str.length == n * 2) return res.push(str);
      // 只要左括号有剩，就可以选它，然后继续做选择（递归）
      if (leftRemain > 0) backtrack(leftRemain - 1, rightRemain, str + "(");
      // 只有右括号比左括号剩的多，才能选右括号
      if (rightRemain > leftRemain)
        backtrack(leftRemain, rightRemain - 1, str + ")");
    };
    // 递归的入口，剩余数量都是n，初始字符串是空串
    backtrack(n, n, "");
    return res;
  };
var generateParenthesis = function (n) {
    let ans = []
    const dfs = (str, open, close, max) => {
        if (str.length === n * 2) {
            return ans.push(str)
        }
        if (open < max) {
            str += '('
            dfs(str, open + 1, close, max)
            str = str.slice(0, str.length - 1)
        }
        if (close < open) {
            str += ')'
            dfs(str, open, close + 1, max)
            // str=str.slice(0,str.length-1)
        }
    }
    dfs('', 0, 0, n)
    return ans
};

console.log(generateParenthesis(4));