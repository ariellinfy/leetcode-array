var majorityElement = function(nums) {
    const majorityCount = nums.length / 2;
    nums.sort((a, b) => a - b);
    let i = 0;
    while (i < nums.length) {
        if (nums.lastIndexOf(nums[i]) - nums.indexOf(nums[i]) + 1 > majorityCount) {
            return nums[i];
        }
        i = nums.lastIndexOf(nums[i]) + 1;
    }
};