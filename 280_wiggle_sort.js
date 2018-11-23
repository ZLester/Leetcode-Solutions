const swap = (nums, x, y) => {
    const temp = nums[x];
    nums[x] = nums[y];
    nums[y] = temp;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        const cur = nums[i];
        const next = nums[i + 1];
        if (i % 2 === 0 && cur > next || i % 2 !== 0 && cur < next) {
            swap(nums, i, i + 1);
        }
    }
};
