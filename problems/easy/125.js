/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	return s.replace(/\s\D\W/g, '')
};

let s = "A man, a plan, a canal: Panama"
let s1 = "race a car"

console.log(isPalindrome(s))
console.log(isPalindrome(s1))

function replacer(match, p1, p2, p3, offset, string) {
	// p1 - не цифры, p2 - цифры, p3 - не буквы и не цифры
	return [p1, p2, p3].join(' - ');
}
var newString = 'ab,c12345# $*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString)

