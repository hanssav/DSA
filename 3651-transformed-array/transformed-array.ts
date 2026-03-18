// function constructTransformedArray(nums: number[]): number[] {
//     const n = nums.length; 
//     const res: number[] = new Array(n)

//     for(let i = 0; i < n; i++){
//         const val = nums[i];
//         let idx = (i + val) % n;;

//         if(idx < 0) idx += n

//         res[i] = nums[idx]
//     }

//     return res;
// };

function constructTransformedArray(nums: number[]): number[] {
    const n = nums.length;
    const res = new Int32Array(n); // Gunakan TypedArray jika angkanya integer untuk performa lebih stabil

    for (let i = 0; i < n; i++) {
        const val = nums[i];
        
        // Menggunakan logika satu baris untuk menangani indeks negatif
        // Ini menghindari percabangan (branching) if-else
        let targetIdx = (i + (val % n) + n) % n;
        
        res[i] = nums[targetIdx];
    }

    return Array.from(res); // Kembalikan sebagai array biasa jika kontrak fungsinya mengharuskan
};