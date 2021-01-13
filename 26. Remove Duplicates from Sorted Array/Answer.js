var removeDuplicates = function(nums) {
  let saved = {};
  for (let i = 0; i < nums.length; i++) {
      if (saved[nums[i]]) {
        nums.splice(i, 1);
        i--;
      } else {
        saved[nums[i]] = true;
      }
  }
  return nums.length;  
};