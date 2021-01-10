var sortedSquares = function(A) {
    if (!Array.isArray(A)) {
        return 'invalid input';
    } else {
        const squ = A.map(num => num * num);
        squ.sort((a, b) => a-b);
        return squ;
    }
};