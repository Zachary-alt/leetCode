// 三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//  

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//     let res = [],len=nums.length, leftIndex
//     nums.sort((a, b) => { return a - b })
//     for (let i = 0; i < len; i++) {
//         leftIndex = i - 1;
//         while (leftIndex >= 0 && i > 0 && i < nums.length - 1) {
//             let left = 0 - nums[i] - nums[leftIndex]
//             console.log(leftIndex, i, left, nums.slice(i));
//             if (nums.slice(i).includes(left) && nums[leftIndex] <= nums[i] && nums[i] <= left) {
//                 res.push([nums[leftIndex], nums[i], left])
//             }
//             leftIndex--;
//             while (nums[leftIndex] === nums[leftIndex + 1]) leftIndex--;
//         }

//     }
// 需要去重
//     return res
// };
var threeSum = function (nums) {
    let res = [], len = nums.length
    nums.sort((a, b) => { return a - b })
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if (i > 0 && nums[i] == nums[i - 1]) continue; // 比较上一个去重
        if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break
        if (nums[i] + nums[len - 1] + nums[len - 2] < 0) continue
        let L = i + 1;
        let R = len - 1;
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R];
            if (sum === 0) {
                res.push([nums[i], nums[L], nums[R]])
                while (L < R && nums[L] == nums[L + 1]) L++; // 去重
                while (L < R && nums[R] == nums[R - 1]) R--; // 去重
                L++;
                R--;
            } else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }
    return res
};
console.log(threeSum([0, 0, 0, 0, 0, 0, 0]));