// 正则表达式匹配
// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

//  
// 示例 1：

// 输入：s = "aa" p = "a"
// 输出：false
// 解释："a" 无法匹配 "aa" 整个字符串。
// 示例 2:

// 输入：s = "aa" p = "a*"
// 输出：true
// 解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
// 示例 3：

// 输入：s = "ab" p = ".*"
// 输出：true
// 解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
// 示例 4：

// 输入：s = "aab" p = "c*a*b"
// 输出：true
// 解释：因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。

// 提示：

// 1 <= s.length <= 20
// 1 <= p.length <= 30
// s 可能为空，且只包含从 a-z 的小写字母。
// p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
// 保证每次出现字符 * 时，前面都匹配到有效的字符

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) { // 正则打败正则
    return new RegExp('^' + p + '$').test(s)
};
var isMatch = function (s, p) { // 暴力递归
    if (p === '.*') return true
    let regArr = []
    for (let i = 0; i < p.length; i++) {
        if (p[i + 1] !== "*") {
            regArr.push(p[i])
        } else {
            regArr.push(p[i] + p[i + 1])
            i++
        }
    }
    console.log(regArr);
    let arrow = 0, res = true
    for (let i = 0; i < s.length; i++) {
        if (!regArr[arrow]) {
            res = false;
            break
        }
        let test = match(s[i], regArr[arrow])
        let test2 = match(s[i+1], regArr[arrow+1])
        console.log(test, i, s[i], arrow, regArr[arrow]);
        if (test) {
            if (!regArr[arrow].includes('*') && i < s.length - 1) arrow++;
            continue;
        } else if (!test) {
            if (regArr[arrow].includes('*')) {
                arrow++
                i--
                continue
            } else {
                res = false;
                break
            }
        }
    }
    console.log(2333, res, arrow , regArr.length - 1, checkRegArr(s, regArr, arrow));
    /**
     * res === true 时，s已经匹配完了
     * 如果p刚好匹配结束，那一定ok
     * 但是p不一定匹配结束，可能还剩下a* / .*（ok）或者a(no)或者a*.a(no)  [abc .*abc]  [abaabc .*abc]
     * 如果s最后一个字符可以匹配剩下全部的p，则ok  no
     */
    return res && (arrow === regArr.length - 1 || checkRegArr(s,regArr, arrow))
};
function checkRegArr(s, regArr, arrow) {
    let ok = true
    for (let i = arrow; i < regArr.length - 1; i++) {
        
        if ((regArr[i + 1].includes('*')&&match(regArr[i + 1], regArr[i]) && match(s[s.length - 1], regArr[i + 1])) || regArr[i].includes('*')) {
            continue
        } else {
            ok = false
        }
    }
    return ok
}
function match(s, p) {
    let bool = false
    if (p.includes('*')) {
        if (s === p[0] || p[0] === '.') bool = true
    } else if (p === '.') {
        bool = true
    } else {
        bool = s === p
    }
    return bool
}
console.log(isMatch("ab", ".*c"));