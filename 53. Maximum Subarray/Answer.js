var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    let sum = 0;
    const output = [];
    debugger;
    for (let i = 1; i < nums.length; i++) {
        if (sum + nums[i-1] > sum && nums[i-1] > 0 || nums[i-1] + nums[i] > 0) {
            sum = sum + nums[i-1];
        } else {
            if (sum > 0) {
                output.push(sum);
            }
            sum = 0;
        }
    }
    if (sum > 0) {
        output.push(sum);
    }

    let max = Math.max.apply(null, output);
    return max;
};

maxSubArray([1,2,-1,-2,2,1,-2,1,4,-5,4]);