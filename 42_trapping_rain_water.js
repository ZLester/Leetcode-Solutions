/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let water = 0;
    let leftIndex = 0;
    let leftMax = height[leftIndex];
    let rightIndex = height.length - 1;
    let rightMax = height[rightIndex];
    while (leftIndex < rightIndex) {
        const curLeft = height[leftIndex];
        const curRight = height[rightIndex];
        if (curLeft < curRight) {
            if (curLeft < leftMax) {
                water += leftMax - curLeft;
            } else {
                leftMax = curLeft;
            }
            leftIndex++;
        } else {
            if (curRight < rightMax) {
                water += rightMax - curRight;
            } else {
                rightMax = curRight;
            }
            rightIndex--;
        }
    }
    return water;
};
