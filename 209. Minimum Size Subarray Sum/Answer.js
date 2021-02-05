var minSubArrayLen = function(target, nums) {
    const total = nums.reduce((acc, num) => acc + num, 0);
    if (total < target) {
        return 0;
    } else if (nums.indexOf(target) > -1 || Math.max.apply(null, nums) > target) {
        return 1;
    } else {
        let minLen = nums.length;
        let subarray = [];
        let temp = 0;
        for (let j = 0; j < nums.length; j++) {
            for (let i = j; i < nums.length; i++) {
                if (temp < target) {
                    subarray.push(nums[i]);
                    temp = temp + nums[i];
                } else {
                    break;
                }
            }
            if (subarray.length < minLen && temp >= target) {
                minLen = subarray.length;
            }
            subarray = [];
            temp = 0;
        }
        return minLen;
    }
};