var longestCommonPrefix = function(strs) {
    if (strs.length < 1 || strs[0].length < 1) {
        return '';
    }
    let prefix = [];
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (!prefix[i]) {
                prefix.push(strs[j][i]);
            } else if (prefix[i] !== strs[j][i]) {
                prefix.pop();
                return prefix.join('');
            }
        }
    }
    return prefix.join('');
};