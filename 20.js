// 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//  

// 示例 1：

// 输入：s = "()"
// 输出：true
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) { // 栈
    const len = s.length
    if (len % 2 !== 0) return false

    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{'],
    ])
    let stk = []
    for (let ch of s) {
        if (pairs.has(ch)) {
            if (stk.length && stk[stk.length - 1] === pairs.get(ch)) {
                stk.pop()
            } else {
                return false
            }
        } else {
            stk.push(ch)
        }
    }
    return !stk.length
};


console.log(isValid('{()[]}'));