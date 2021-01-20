var heightChecker = function(heights) {
    const original = heights.slice(0);
    heights.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (original[i] !== heights[i]) {
            count++;
        }
    }
    return count;
};