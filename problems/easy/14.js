// 14. Longest Common Prefix


let strs = ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:


// way One
var longestCommonPrefix = function (strs) {
    function index_min(arr) {
        var i, minV, minP;
        for (i = 0; i < arr.length; i++) {
            if (typeof minV === "undefined" || arr[i] <= minV) {
                minV = arr[i];
                minP = i;
            }
        }
        return minP;
    }

    function index_max(arr) {
        var i, maxV, maxP;
        for (i = 0; i < arr.length; i++) {
            if (typeof maxV === "undefined" || arr[i] >= maxV) {
                maxV = arr[i];
                maxP = i;
            }
        }
        return maxP;
    }

    let shorItemIndex = index_min(strs.map(item => item.length))
    let shortItem = strs[shorItemIndex]

    let arrBesideshortItem = [...strs.slice(0, shorItemIndex), ...strs.slice(shorItemIndex + 1)]
    let arrPrefixs = []

    let itemFirst = ''
    let arrByShortItem = shortItem.split('')

    for (let i = 0; i < arrByShortItem.length; i++) {
        itemFirst += arrByShortItem[i]
        let flag = true
        arrBesideshortItem.forEach(el => {
            if (el.search(`${itemFirst}`) == -1 || el.search(`${itemFirst}`) > 0) {
                flag = false
            }
        })
        if (flag) arrPrefixs.push(itemFirst)
    }
    let result = arrPrefixs[index_max(arrPrefixs)]

    return result ? result : ''
};


// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



//     Example 1:
// let strs = ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.