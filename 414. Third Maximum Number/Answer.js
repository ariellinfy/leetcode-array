var thirdMax = function(nums) {
    nums.sort((a, b) => b - a);
    let current = 0;
    let count = 0;
    for (let i = 1; i < nums.length + 1; i++){
        if (nums[i-1] > nums[i] || i === nums.length) {
            current = nums[i-1];
            count++;
        }
        if (count === 3) {
            break;
        }
    }
    if (count === 3) {
        return current;
    } else if (count < 3) {
        return Math.max.apply(null, nums);
    }
};