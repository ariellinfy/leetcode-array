var findDiagonalOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    let diagonal = [];
    let m = matrix.length - 1;
    let n = matrix[0].length - 1;
    let x = 0;
    let y = 0;
    let a = 0;
    let b = 0;
    let isUpward = false;
    let len = 1;
    debugger;
    for (let i = 0; i < m + n + 1; i++) {
        let temp = [];
        let count = 0;
        while (x + y === i) {
            temp.push(matrix[x][y]);
            count++;
            while (count !== len) {
                x++;
                y--;
                temp.push(matrix[x][y]);
                count++;
            }
            if (b < n) {
                b++;
                x = 0;
                y = b;
                if (m === n) {
                    len++;
                } else {
                    if (len < Math.min(m+1, n+1)) {
                        len++;
                    }
                }
            } else {
                a++;
                x = a;
                y = b;
                if (m === n) {
                    len--;
                } else {
                    if (i >= Math.max(m, n)) {
                        len--;
                    }
                }
            }
            break;
        }
        if (!isUpward) {
            temp.reverse();
        }
        diagonal = diagonal.concat(temp);
        isUpward = !isUpward;
    }
    return diagonal;
};

let a = [[2,5],[8,4],[0,-1]];
findDiagonalOrder(a);