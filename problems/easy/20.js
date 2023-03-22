//  Valid Parentheses



var isValid = function (s) {
    let pattern = {
        '(': ')',
        ')': 'false',
        '{': '}',
        '}': 'false',
        '[': ']',
        ']': 'false',
    }

    let newArr = []
    s.split('').forEach(item => {
        if (pattern[item]) {
            if (pattern[newArr[newArr.length - 1]] == item) {
                newArr.pop()
            } else {
                newArr.push(item)
            }
        }
    })
   
    return newArr.length == 0 ? true : false
};


s = "(){({({})})}}{"
console.log(isValid(s))








// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


//     Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false