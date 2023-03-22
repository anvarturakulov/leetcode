// 26. Remove Duplicates from Sorted Array

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// let nums = [0, 0, 0, 0, 3]
// let nums = [1, 1, 2, 2, 3, 6]
// let nums =  [-3, -1, 0, 0, 0, 3, 3]

var removeDuplicates = function (nums) {
    let minus = 0
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] == nums[i - 1]) {
            nums[i] = '_'
            minus += 1
        }
    }

    let j = 0
  
    while (j < nums.length-1) {
        if (isNaN(nums[j])) {
            let k = j + 1
            while (isNaN(nums[k]) && k < nums.length - 1) {
                k ++
            }
            let temp
            temp = nums[k]
            nums[k] = nums[j]
            nums[j] = temp
        }
        
        j = j + 1
    }

    return nums.length - minus

};

console.log(nums, removeDuplicates(nums))



