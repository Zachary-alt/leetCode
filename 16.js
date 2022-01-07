// 最接近的三数之和
// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

// 返回这三个数的和。

// 假定每组输入只存在恰好一个解。

//  

// 示例 1：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let len=nums.length,min,res,arr;
    nums.sort((a, b) => { return a - b })
    for(let i=0;i<len;i++){
        if(nums[i]==nums[i-1]) continue;
        let l=i+1,r=len-1
        while(l<r){
            let sum = nums[i]+nums[l]+nums[r]
            if (sum == target) {
                return sum;
            }
            let minus = Math.abs(target - sum)
            if(!min||min>minus){
                min = minus
                res = sum
                arr = [nums[i],nums[l],nums[r]]
                // while(nums[l]===nums[l+1]) l++; // 无需去重
                // while(nums[r]===nums[r-1]) r--;
            } else if(sum>target){
                r--;
            }else{
                l++
            }
        }
    }
    console.log(arr);
    return res
};
console.log(threeSumClosest([13,2,0,-14,-20,19,8,-5,-13,-3,20,15,20,5,13,14,-17,-7,12,-6,0,20,-19,-1,-15,-2,8,-2,-9,13,0,-3,-18,-9,-9,-19,17,-14,-19,-4,-16,2,0,9,5,-7,-4,20,18,9,0,12,-1,10,-17,-11,16,-13,-14,-3,0,2,-18,2,8,20,-15,3,-13,-12,-2,-19,11,11,-10,1,1,-10,-2,12,0,17,-19,-7,8,-19,-17,5,-5,-10,8,0,-12,4,19,2,0,12,14,-9,15,7,0,-16,-5,16,-12,0,2,-16,14,18,12,13,5,0,5,6],-59));