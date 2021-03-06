// 两数之和
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 示例 1：
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  最容易想到的方法是枚举数组中的每一个数 x，寻找数组中是否存在 target - x。

//  当我们使用遍历整个数组的方式寻找 target - x 时，需要注意到每一个位于 x 之前的元素都已经和 x 匹配过，因此不需要再进行匹配。
//  而每一个元素不能被使用两次，所以我们只需要在 x 后面的元素中寻找 target - x。
 
var twoSum = function(nums, target) { //暴力枚举
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        }
        
    }
};
 var twoSum = function(nums, target) { //哈希表
     let map = new Map() // 存储
    for(let i=0;i<nums.length;i++){
        let left = target-nums[i];
        if(map.has(left)) return [map.get(left),i]
        map.set(nums[i],i)
    }
};

console.log(twoSum([3,2,4],6));