// function maxProduct(words: string[]): number {
//     const n = words.length;
//     let count = 0;

//     let nv = []

//     for(let i = 0; i < n; i++){
//         let ns = new Set();
//         let hv = false;

//         for(const str of words[i]){
//             ns.add(str)
            
//             // if((nv[i - 1] || new Set()).has(str)) hv = true;
//         }
        
//         nv.push(ns);
//         // if(hv) count = Math.max(count, words[i].length * (words[i - 1].length || 1))
//     }


//     console.log(nv)
//     // for(let i = 0; i < n; i++){
//     //     const st = new Set([...words[i]])
//     //     for(let j = i + 1; j < n; j++){
//     //         let hasValue = false;

//     //         for(const str of words[j]){
//     //             if(st.has(str)) {
//     //                 hasValue = true
//     //                 break;
//     //             };
//     //         }
            
//     //         if(hasValue) continue;

//     //         count = Math.max(count, words[i].length * words[j].length);
//     //     }
//     // }

//     return count;
// };

function maxProduct(words: string[]): number {
    const n = words.length;
    const masks = new Int32Array(n); // Menyimpan bitmask tiap kata
    const lengths = new Int32Array(n); // Menyimpan panjang tiap kata
    let maxProd = 0;

    // 1. Pre-processing: Ubah setiap kata menjadi angka (bitmask)
    for (let i = 0; i < n; i++) {
        let mask = 0;
        for (let j = 0; j < words[i].length; j++) {
            // Geser bit sebanyak selisih karakter dengan 'a'
            // Gunakan OR (|) untuk menyalakan bit tersebut
            mask |= (1 << (words[i].charCodeAt(j) - 97));
            // console.log(mask, 'mask 1')
        }
        masks[i] = mask;
        // console.log(mask, 'mask 1')

        lengths[i] = words[i].length;
        // console.log(lengths, 'lengths')
    }

    // 2. Bandingkan antar bitmask
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // LOGIKA UTAMA:
            // Jika hasil AND adalah 0, berarti TIDAK ADA huruf yang sama
            if ((masks[i] & masks[j]) === 0) {
                const currentProd = lengths[i] * lengths[j];
                if (currentProd > maxProd) {
                    maxProd = currentProd;
                }
            }
        }
    }

    return maxProd;
}