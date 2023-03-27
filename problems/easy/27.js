
let nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2

var removeElement = function (nums, val) {
    let i = 0
    let j = 0
    let count = 0
    let len = nums.length
    while (i < (len - count)) {
        if (nums[i] == val) {
            nums = [...nums.slice(0, i), ...nums.slice(i + 1, len)]
            nums.push('_')
            count++
            console.log(nums)
        } else {
            i++
        }
    }
    return len-count

};

console.log(nums + '----')
console.log(removeElement(nums, val))