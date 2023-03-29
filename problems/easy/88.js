// 88. Merge Sorted Array


let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// let nums1 = [0], m = 0, nums2 = [1], n = 1

var merge = function (nums1, m, nums2, n) {
    for (let i=0; i<n;i++) {
        nums1[m+i] = nums2[i]
    }

    // for (let i=0; i<(m+n-1);i++) {
    //     for (j=(i+1); j<(m+n); j++) {
    //         if (nums1[i]>nums1[j]) {
    //             let temp = nums1[i]
    //             nums1[i] = nums1[j]
    //             nums1[j] = temp
    //         }
    //     }
    // }

    return nums1.sort((a,b)=> a-b)
};
merge(nums1, m, nums2, n)
console.log(nums1)
