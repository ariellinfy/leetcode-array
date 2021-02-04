var reverseWords = function(s) {
    const words = s.split(" ");
    const rev = words.map(word => word.split('').reverse().join(''));
    return rev.join(" ");
};