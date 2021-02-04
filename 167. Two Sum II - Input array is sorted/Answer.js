var twoSum = function(numbers, target) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        let comp = target - numbers[i];
        let j = numbers.indexOf(comp, i+1);
        if (j > i) {
            result.push(i+1);
            result.push(j+1);
            return result;
        }
    }
};