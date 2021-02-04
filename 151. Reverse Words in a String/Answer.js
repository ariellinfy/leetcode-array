var reverseWords = function(s) {
    s.trim();
    const words = s.split(" ");
    const rev = [];
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i].length > 0) {
            rev.push(words[i]);
        }
    }
    return rev.join(" ");
};