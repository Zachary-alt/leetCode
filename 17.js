// 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 示例 1：

// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let res = [], len = digits.length
    if (len === 0) return res;
    const phone = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    function backtrack(index, curStr) {
        if (index > len - 1) { // 指针越界，递归的出口
            res.push(curStr)// 将解推入res
            return// 结束当前递归分支
        }
        const letters = phone[digits[index]]
        for (const letter of letters) {// 一个字母是一个选择，对应一个递归分支
            backtrack(index + 1, curStr + letter)// 选择翻译成letter，生成新字符串，i指针右移继续翻译（递归）
        }

    }
    backtrack(0, '')// 递归的入口，初始字符串为''，从下标0开始翻译
    return res;
};
console.log(letterCombinations('23'));