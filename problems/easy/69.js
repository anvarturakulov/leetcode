// 67. Add Binary

let x = 33123

var mySqrt = function (x) {
    for (let i = 0; i < x; i++) {
        let sqrt = i * i
        let twoI = i * 2
        if (sqrt == x || (x - sqrt) <= twoI) return i
    }
    if (x<3) return x
};

console.log(mySqrt(x))



