// 100. Same Tree
var isSameTree = function (p, q) {
    if (p.length != q.length) return false
    let flag = true
    for (let i=0; i<q.length; i++) {
        if (q[i] != p[i]) flag = false
    }
    return flag
};

let p = [1, 2], q = [1, null, 2]

console.log(isSameTree(p, q))


