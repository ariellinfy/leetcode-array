var checkIfExist = function(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] === 2 * arr[i] || arr[i] === 2 * arr[j]) {
                return true;
            }
        }
    }
    return false;
};