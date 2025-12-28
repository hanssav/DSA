var merge = function(nums1, m, nums2, n) {
    let lastValid1 = m - 1;       // elemen terakhir di nums1 yang valid
    let lastValid2 = n - 1;       // elemen terakhir di nums2
    let fillIndex = m + n - 1;    // posisi akhir untuk isi angka

    while (lastValid2 >= 0) {
        // jika nums1 masih punya angka valid dan angkanya lebih besar
        if (lastValid1 >= 0 && nums1[lastValid1] > nums2[lastValid2]) {
            nums1[fillIndex] = nums1[lastValid1];
            lastValid1--;
        } else {
            nums1[fillIndex] = nums2[lastValid2];
            lastValid2--;
        }
        console.log(nums1, 'nums1')
        console.log(lastValid1, 'lastValid1');
        console.log(lastValid2, 'lastValid2');
        console.log(fillIndex, 'fill index')
        console.log("=============")
        fillIndex--;
    }
};

// var merge = function(nums1, m, nums2, n) {
//     let lastValid1 = m - 1;
//     let lastValid2 = n - 1;

//     for (let fillIndex = m + n - 1; fillIndex >= 0 && lastValid2 >= 0; fillIndex--) {
//         if (lastValid1 >= 0 && nums1[lastValid1] > nums2[lastValid2]) {
//             nums1[fillIndex] = nums1[lastValid1];
//             lastValid1--;
//         } else {
//             nums1[fillIndex] = nums2[lastValid2];
//             lastValid2--;
//         }
//     }
// };

