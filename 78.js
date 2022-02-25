// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

//  

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const ans =[]
    const dfs = (arr,i)=>{
        if(i===nums.length){
            return ans.push(arr.slice())
        }
        arr.push(nums[i])
        dfs(arr,i+1)
        arr.pop()
        dfs(arr,i+1)
    }
    dfs([],0)
    return ans
};

console.log(subsets([1,2,2]));