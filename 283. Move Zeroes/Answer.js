var moveZeroes = function(nums) {
    let count = 0;
    nonZero = nums.filter((num) => num !== 0);
    let total = nonZero.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (count === total) {
                break;
            }
            nums.splice(i, 1); 
            nums.push(0);
            i--;
        } else {
            count++;
        }
    }
    return nums;
};