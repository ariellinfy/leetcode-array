var dominantIndex = function(nums) {
    let largest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[largest] < nums[i]) {
            largest = i;
        }        
    };
    for (let j = nums.length - 1; j >= 0; j--) {
        if (largest !== j && nums[largest] < 2 * nums[j]) {
            return -1;
        }
    }
    return largest;
};