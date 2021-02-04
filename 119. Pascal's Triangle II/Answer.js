var getRow = function(rowIndex) {
    let preRow = [];
    let curRow = [];
    let triangle = [];
    for (let i = 0 ; i < rowIndex + 1; i++) {
        curRow.push(1);
        if (i > 0) {
            for (let j = 0; j < preRow.length - 1; j++) {
                curRow.push(preRow[j] + preRow[j+1]);
            }
            curRow.push(1);
        }
        triangle.push(curRow);
        preRow = curRow;
        curRow = [];
    }
    return triangle[rowIndex];
};
