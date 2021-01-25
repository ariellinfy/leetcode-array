var plusOne = function(digits) {
    if (digits[digits.length - 1] === 9) {
        let acc = 0;
        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] + 1 === 10) {
                digits[i] = 0;
                acc = 1;
            } else {
                digits[i] = digits[i] + 1;
                acc = 0;
                break;
            }
        }
        if (acc === 1 && digits[0] === 0) {
            digits.unshift(1);
        }
    } else {
        digits[digits.length - 1] = digits[digits.length - 1] + 1;
    }
    return digits;
};
