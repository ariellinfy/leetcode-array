var duplicateZeros = function(arr) {
    for (let i=0; i<arr.length; i++) {
        if (!arr[i]) {
            arr.splice(i, 0, 0);
            arr.pop();
            i++;
        }
    }
};
