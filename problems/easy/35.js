// let nums = [2, 3, 6, 7, 9], target = 4
// let nums = [1], target = 1
// let nums = [1, 3], target = 1
// let nums = [1, 3, 5], target = 5

// let nums = [1, 3, 5, 6], target = 2
let nums = [1, 3, 5, 6], target = 5

// first method

var searchInsert1 = function (nums, target) {
  let middle = Math.floor(nums.length / 2)
  let oldNums = [...nums]
  let element
  
  if (nums.length == 1) {
    return nums[0] >= target ? 0 : 1
  }

  while (middle > 0) {
    if (nums[middle] == target) {
      element = nums[middle]
      middle = 0
      break
    }
    if (nums[middle] > target) {
      nums = nums.slice(0, middle)
    } else {
      nums = nums.slice(middle)
    }
    middle = Math.floor(nums.length / 2)
    element = nums[0]
  }

  let middleIndex = oldNums.indexOf(element)
  return oldNums[middleIndex] >= target ? middleIndex : middleIndex + 1

};


var searchInsert = function (nums, target) {
  if (nums.includes(target)) return nums.indexOf(target)
  return [...nums, target].sort((a, b) => a-b).indexOf(target)  
};
console.log(searchInsert(nums, target))
