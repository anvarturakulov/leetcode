// 118. Pascal's Triangle
var generate = function (numRows) {
    let startArr = [1]
    let nextArr = []
    let result = [[1]]
    let i = 0
    
    while (i<(numRows-1)) {
        nextArr[0] = 1
        nextArr[i+1] = 1
        for (let j=0; j<startArr.length; j++) {
            if (startArr[j + 1]) {
                nextArr[j + 1] = startArr[j] + startArr[j + 1]
            }
        }
        result.push([...nextArr])
        startArr = [...nextArr]
        nextArr.length = 0
        i++
    }
    return result
};

let numRows = 5
console.log(generate(numRows))