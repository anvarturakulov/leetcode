// 58. Length of Last Word

var lengthOfLastWord = function (s) {
    let newArr = s.trim().split(' ')
    return newArr[newArr.length - 1].length
};

let s = "   fly me   to   the moon  "

console.log(lengthOfLastWord(s))