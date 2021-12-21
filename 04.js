// 寻找两个正序数组的中位数
// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 算法的时间复杂度应该为 O(log (m+n)) 。

//  

// 示例 1：

// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1,...nums2].sort((a,b)=>{return a-b})
    let len = arr.length
    if(len%2!==0){ // 奇数取中间值
        return arr[Math.floor(len/2)]
    }else{
        return (arr[len/2]+arr[len/2-1])/2
    }
};