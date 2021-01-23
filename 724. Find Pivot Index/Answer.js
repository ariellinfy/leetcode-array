var pivotIndex = function(nums) {
    if (nums.length < 3) {
        return -1;
    }
    let pivotTable = [];
    let pivotIndex = [];
    nums.reduce((acc, num) => {
        prefix = acc + num
        pivotTable.push(prefix);
        return prefix;
    }, 0);
    pivotTable.unshift(0);
    for (let i = 0; i < nums.length; i++) {
        if (pivotTable[i] === pivotTable[pivotTable.length - 1] - pivotTable[i] - nums[i]) {
            pivotIndex.push(i);
        }
    }
    const result = pivotIndex.length ? pivotIndex[0] : -1;
    return result;
};
