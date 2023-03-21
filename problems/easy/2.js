// 9. Palindrome Number

// first way
var isPalindrome = function (x) {
    if (x < 0) return false
    return x == parseInt(String(x).split('').reverse().join(''), 10)
};
