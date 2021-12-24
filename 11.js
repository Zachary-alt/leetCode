// 盛最多水的容器
// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 输入：height = [4,3,2,1,4]
// 输出：16

// 提示：

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let len = height.length
    let left = 0, right = len - 1;
    let area = Math.min(height[0], height[len - 1]) * right//初始面积
    while (left < right) {// 只有在i和j不重合的情况下(i和j会不停的往中心移动直到整个查询的过程结束)
         /*判断进入循环时，比较i j指针所指的高度 */
        /*这里为什么我们总是移动较小值呢   如果我们移动较大的值其实是毫无意义的  因为实际盛水只受较短高的影响
        * 这种情况下就可以直接排除移动较大值的情况，所以我们总是在排除移动当前较大值(由于i和j的变化最大值也会变)
        */
        height[left] > height[right] ? right-- : left++
        /*只要每次都判断是否比上一次的面积大小，选择大的保存即可*/
        area = Math.max(area, Math.min(height[left], height[right]) * (right - left))
    }
    return area
};

console.log(maxArea([1,1]));