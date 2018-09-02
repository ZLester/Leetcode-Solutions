const search = (arr, start, end) => {
    const middle = Math.floor((start + end) / 2);
    const cur = arr[middle];
    const left = arr[middle - 1];
    const right = arr[middle + 1];

    if (cur > left && cur > right) {
        return middle;
    }
    if (cur < left) {
        return search(arr, start, middle - 1);
    }
    return search(arr, middle + 1, end);
}

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    return search(A, 0, A.length - 1);
};
