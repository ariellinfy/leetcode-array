var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    const maxSum = nums.reduce((acc, num, i) => {
        if (i % 2 === 0) {
            return acc + num;
        } else {
            return acc;
        }
    }, 0)
    return maxSum;
};