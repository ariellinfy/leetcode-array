var addBinary = function(a, b) {
    const x = a.split('');
    const y = b.split('');
    if (a.length !== b.length) {
        if (a.length > b.length) {
            let diff = a.length - b.length;
            for (let i = 0; i < diff; i++) {
               y.unshift("0"); 
            }
        } else {
            let diff = b.length - a.length;
            for (let i = 0; i < diff; i++) {
                x.unshift("0"); 
             }
        }
    }
    const sum = [];
    let carry = 0;
    for (let i = x.length - 1; i >= 0; i--) {
        if (Number(x[i]) + Number(y[i]) + carry === 3) {
            sum.unshift(1);
            carry = 1;
        } else if (Number(x[i]) + Number(y[i]) + carry === 2) {
            sum.unshift(0);
            carry = 1;
        } else if (Number(x[i]) + Number(y[i]) + carry === 1) {
            sum.unshift(1);
            carry = 0;
        } else if (Number(x[i]) + Number(y[i]) + carry === 0) {
            sum.unshift(0);
            carry = 0;
        } 
    }
    if (carry === 1) {
        sum.unshift(1);
    }
    const result = sum.join("");
    return result;
};