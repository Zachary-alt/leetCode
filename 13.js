// 罗马数字转整数
// 示例 5:

// 输入: s = "MCMXCIV"
// 输出: 1994
// 解释: M = 1000, CM = 900, XC = 90, IV = 4.
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romanArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let arr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let res = 0
    for (let i = 0; i < s.length; i++) {
        let item = s[i]
        let index = romanArr.indexOf(item)
        if (index <= romanArr.indexOf(s[i + 1]) || i + 1 === s.length) {
            res += arr[index]
        } else {
            res -= arr[index]
        }
    }
    return res
};
console.log(romanToInt("MCMXCIV"));