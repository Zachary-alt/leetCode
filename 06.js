// Z 字形变换
// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
//  

// 示例 1：

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"
// 示例 2：
// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    /**
     * 画图得出规律：第一次能整除时res下标index++,第二次开始index--
     */
    let len = s.length
    if (len < 2 || numRows < 2) return s
    let res = [], desc = false, index = 0
    for (let i = 0; i < len; i++) {
        res[index] = res[index] ? res[index] + s[i] : s[i]
        if (i % (numRows - 1) === 0) desc = !desc;
        desc ? index += 1 : index -= 1
    }
    return res.join('')
};

console.log(convert("PA", 1));