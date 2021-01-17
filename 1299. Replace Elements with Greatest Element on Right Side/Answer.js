var replaceElements = function(arr) {
    if (!arr) {
        return 'invalid input';
    }
    if (arr.length > 1) {
        debugger;
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i+1; j < arr.length; j++) {
                let temp = arr.slice(j);
                arr[i] = Math.max.apply(null, temp);
                break;
            }
        }
    }
    arr[arr.length - 1] = -1;
    return arr;
};

// var replaceElements = function(arr) {
//     let o = -1;
//     let n = 0;
//     for (let i = arr.length-1; i >= 0; i--) {
//         n = Math.max(arr[i], o);
//         arr[i] = o;
//         o = n;
//     }
//     return arr;
// };