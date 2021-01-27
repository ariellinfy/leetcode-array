var generate = function(numRows) {
    let result = [];
    let preRow = [];
    let curRow = [1];
    for (let i = 1; i < numRows + 1; i++) {
        if (i > 1) {
            curRow.push(1);
            for (let j = 0; j < i - 2; j++) {
                if (i > 2) {
                    curRow.push(preRow[j] + preRow[j + 1]);
                }
            }
            curRow.push(1);
        }
        result.push(curRow);
        preRow = curRow;
        curRow = [];  
    }
    return result;
};