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
    //我们遍历给定的字符串s。当我们遇到一个左括号时，我们会期望在后续的遍历中，有一个相同类型的右括号将其闭合。由于后遇到的左括号要先闭合，因此我们可以将这个左括号放入栈顶。
    //当我们遇到一个右括号时，我们需要将一个相同类型的左括号闭合。此时，我们可以取出栈顶的左括号并判断它们是否是相同类型的括号。如果不是相同的类型，或者栈中并没有左括号，那么字符串 s 无效，返回False。
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


console.log(isValid('{([)]}'));