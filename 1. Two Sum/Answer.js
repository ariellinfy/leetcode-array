var twoSum = function(nums, target) {
    const output = [];
    if (nums.length < 3) {
        output.push(0, 1);
    } else {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (target - nums[i] === nums[j]) {
                    output.push(i, j);
                    break;
                }
            }
        }
    }
    return output;
};