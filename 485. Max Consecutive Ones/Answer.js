var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let max = 0;
    if (nums.length < 1) {
        return 'no input';
    } else if (nums.length < 2) {
        if (nums[0]===1) {
            max = 1;
        }
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                count++; 
            } else {
                count = 0;
            }
            if (max <= count) {
                max = count;
            }
        }
    }
    return max;
};