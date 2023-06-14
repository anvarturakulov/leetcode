
const isPowerOfTwo = function (n) {
  let newNumber = n, remain
  if (n == 2 || n == 1) return true
  if (n<=0) return false

  while (remain != 1 && newNumber > 2) {
    remain = newNumber % 2
    newNumber = newNumber / 2
  }
  return remain == 0 ? true : false
};

console.log(isPowerOfTwo(1024))
