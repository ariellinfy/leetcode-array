var rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    // const rotate = nums.splice(nums.length - k, k);
    // nums = rotate.concat(nums);
    return nums;
};