// 66. Plus One

var plusOne = function (digits) {
    return (BigInt(digits.join('')) + BigInt(1)).toString().split('')
};

// let digits = [9]
let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
console.log(plusOne(digits))
