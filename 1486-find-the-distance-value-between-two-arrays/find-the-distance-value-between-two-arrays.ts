// function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
//     arr2.sort((a, b) => a - b);

//     let count = 0; 

//     for(const x of arr1){
//         let low = 0; 
//         let high = arr2.length - 1; 

//         let isSafe = true;

//         while(low <= high){
//             const mid = Math.floor(low + (high - low) / 2);
//             if (Math.abs(x - arr2[mid]) <= d) {
//                 isSafe = false;
//                 break; 
//             }

//             if (arr2[mid] < x) low = mid + 1;
//             else high = mid - 1;
//         } 

//         if (isSafe) count++;
//     }

//     return count;
// };


function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    // 1. Sort keduanya
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    let count = 0;
    let j = 0;

    // 2. Iterasi arr1
    for (let i = 0; i < arr1.length; i++) {
        // 3. Geser j sampai menemukan angka di arr2 yang >= arr1[i] - d
        while (j < arr2.length && arr2[j] < arr1[i] - d) {
            j++;
        }

        // 4. Jika setelah digeser, j masih di dalam batas array 
        // DAN arr2[j] ternyata <= arr1[i] + d, 
        // berarti angka arr1[i] ini TIDAK AMAN (ada angka arr2 di dalam rentang [x-d, x+d])
        if (j < arr2.length && arr2[j] <= arr1[i] + d) {
            // Ini angka tidak aman, jangan count++, lanjut ke i berikutnya
            continue;
        } else {
            // Jika j sudah di ujung atau arr2[j] sudah melampaui zona bahaya kanan, 
            // berarti angka arr1[i] ini AMAN
            count++;
        }
    }

    return count;
}