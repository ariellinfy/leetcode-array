var findNumbers = function(nums) {
    if (!nums) {
        return 'invalid input';
    } else {
        let count = 0;
        nums.forEach((num) => {
            let digit = 1;
            while(num >= 10) {
                num = num / 10;
                digit++;
            }
            if (digit % 2 === 0) {
                count++;
            }
        })
        return count;
    }
};