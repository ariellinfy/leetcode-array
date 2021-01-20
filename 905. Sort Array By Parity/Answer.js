var sortArrayByParity = function(A) {
    let evenCount = 0;
    evenTotal = A.filter((num) => num % 2 === 0);
    let total = evenTotal.length;
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 !== 0) {
            if (evenCount === total) {
                break;
            }
            A.push(A[i]);
            A.splice(i, 1); 
            i--;
        } else {
            evenCount++;
        }
    }
    return A;
};