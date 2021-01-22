var findDisappearedNumbers = function(nums) {
    if (nums.length < 1) {
        return nums;
    }
    nums.sort((a, b) => a - b);
    let count1 = 0;
    let count2 = 0;
    let j = nums.length;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] === nums[i]) {
            nums.splice(i, 1);
            count1++;
        }
    }
    if (!count1 && nums.length === nums[nums.length -1]) {
        nums=[];
        return nums;
    }
    while(count2 !== count1) {
        if (nums[nums.length - 1] !== j) {
            if (j === 0) {
                break;
            }
            nums.unshift(j);
            count2++;
            if (count1 === count2) {
                nums.splice(count2, nums.length-count2);
                break;
            }
        } else {
            nums.pop();
        }
        j--;
    }
    return nums;
};