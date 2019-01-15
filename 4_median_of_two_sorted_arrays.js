/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const smaller = nums2.length < nums1.length
        ? nums2
        : nums1;
    const larger = nums2.length >= nums1.length
        ? nums2
        : nums1;

    let low = 0;
    let high = smaller.length;
    
    while (low <= high) {
        const partitionS = Math.floor((low + high) / 2);
        const partitionL = Math.floor((smaller.length + larger.length + 1) / 2) - partitionS;

        const maxLeftS = partitionS === 0
            ? -Infinity
            : smaller[partitionS - 1];
        const minRightS = partitionS === smaller.length
            ? Infinity
            : smaller[partitionS];
        const maxLeftL = partitionL === 0
            ? -Infinity
            : larger[partitionL - 1];
        const minRightL = partitionL === larger.length
            ? Infinity
            : larger[partitionL];

        if (maxLeftS <= minRightL && maxLeftL <= minRightS) {
            if ((smaller.length + larger.length) % 2 === 0) {
                return (Math.max(maxLeftS, maxLeftL) + Math.min(minRightS, minRightL)) / 2
            }
            return Math.max(maxLeftS, maxLeftL);
        }
        if (maxLeftS > minRightL) {
            high = partitionS - 1;
        } else {
            low = partitionS + 1;
        }
    }
};
