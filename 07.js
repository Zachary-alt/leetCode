// 整数反转
// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。
// 示例 2：

// 输入：x = -123
// 输出：-321
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let tag = false, res = '';
    if (x > 0) tag = true;
    res += Math.abs(x)
    res = res.split('').reverse().join('')
    res= tag ? res * 1 : 0 - res * 1
    if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1){
        return 0;
    }else{
        return res
    }
};

console.log(reverse(1534236469));