var searchInsert = function(nums, target) {
    let output = nums.indexOf(target);
    if(output === -1) {
        output = nums.findIndex(num => num > target);
        if (output === -1) {
            output = nums.length;
        }
    }
    return output;
};