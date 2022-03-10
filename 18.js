// 四数之和
// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

// 0 <= a, b, c, d < n
// a、b、c 和 d 互不相同
// nums[a] + nums[b] + nums[c] + nums[d] == target
// 你可以按 任意顺序 返回答案 。

//  

// 示例 1：

// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let res = [], len = nums.length
    if (len < 4) return res
    let arr = nums.sort((a, b) => a - b)
    for (let a = 0; a < len - 3; a++) {
        if (a > 0 && nums[a] === nums[a - 1]) continue
        //在确定第一个数之后，如果 nums[i]+nums[i+1]+nums[i+2]+nums[i+3]>target，说明此时剩下的三个数无论取什么值，四数之和一定大于 target，因此退出第一重循环
        if (nums[a] + nums[a + 1] + nums[a + 2] + nums[a + 3] > target) break
        //在确定第一个数之后，如果 nums[i]+nums[n−3]+nums[n−2]+nums[n−1]<target，说明此时剩下的三个数无论取什么值，四数之和一定小于 target，因此第一重循环直接进入下一轮，枚举 nums[i+1]；
        if (nums[a] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) continue;

        for (let b = a + 1; b < len - 2; b++) {
            if (b > a + 1 && nums[b] === nums[b - 1]) continue
            if (nums[a] + nums[b] + nums[b + 1] + nums[b + 2] > target) break
            if (nums[a] + nums[b] + nums[len - 2] + nums[len - 1] < target) continue;
            let c = b + 1, d = len - 1
            while (c < d) {
                let sum = arr[a] + arr[b] + arr[c] + arr[d]
                if (sum === target) {
                    res.push([arr[a], arr[b], arr[c], arr[d]])
                    while (c < d && nums[c] === nums[c + 1]) c++
                    while (c < d && nums[d] === nums[d - 1]) d--
                    c++
                    d--
                } else if (sum > target) {
                    d--
                } else {
                    c++
                }
            }
        }
    }
    return res
};
// [-2,-1,-1,1,1,2,2]
// 0
console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));