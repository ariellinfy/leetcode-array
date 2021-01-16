var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            return false;
        }
        let count = 0;
        if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
            for (let j = 0; j < i; j++) {
                if (arr[j] < arr[j+1]) {
                    count++;
                }
            }
            for (let j = i+1; j < arr.length; j++) {
                if (arr[j-1] > arr[j]) {
                    count++;
                }
            }
        }
        if (count === arr.length - 1) {
            return true;
        }
    }
    return false;
};