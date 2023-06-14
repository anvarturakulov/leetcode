// 119. Pascal's Triangle II

var getRow = function (rowIndex) {
    let startArr = [1]
    let nextArr = []
    let result = [[1]]
    let i = 0

    while (i < (rowIndex)) {
        nextArr[0] = 1
        nextArr[i + 1] = 1
        for (let j = 0; j < startArr.length; j++) {
            if (startArr[j + 1]) {
                nextArr[j + 1] = startArr[j] + startArr[j + 1]
            }
        }
        result.push([...nextArr])
        startArr = [...nextArr]
        nextArr.length = 0
        i++
    }
    return result[result.length - 1]
};

let rowIndex = 3
console.log(getRow(rowIndex))