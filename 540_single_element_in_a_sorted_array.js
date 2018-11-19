/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums, l, r) {
    l = l === undefined
        ? 0
        : l;
    r = r === undefined
        ? nums.length - 1
        : r;

    if (l === r) {
        return nums[l];
    }

    const middle = l + ((r - l) / 2);
    const num = nums[middle];

    if (middle % 2 === 0) {
        const nextNum = nums[middle + 1];
        if (num !== nextNum) {
            return singleNonDuplicate(nums, l, middle);
        }
        return singleNonDuplicate(nums, middle + 2, r);
    } else {
        const prevNum = nums[middle - 1];
        if (num !== prevNum) {
            return singleNonDuplicate(nums, l, middle - 1);
        }
        return singleNonDuplicate(nums, middle + 1, r);
    }
};
