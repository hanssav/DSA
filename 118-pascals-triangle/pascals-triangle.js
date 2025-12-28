/**
 * @param {number} numRows
 * @return {number[][]}
 */
// var generate = function(numRows) {
//     const results = []
    

//     for(let i = 0; i < numRows; i++){
//         if(i === 0) {
//           results.push([1])
          
//         } else if(i === 1)  {
//           results.push([1, 1])
//         } else if(i > 1){
//           let row = [1]
//           for(let j = 1; j < i; j++ ) {
//             row.push(results[i-1][j] + results[i-1][j-1])
//           }
//           row.push(1)
      
//         results.push(row)
//         }
        
//             // tempList.splice(j, 0, results[i-1][j] + results[i-1][j-1])
//         console.log(results, 'res')
//       console.log("=========dif========")
//     } 

//     console.log(results, 'results')

//   return results
// };

var generate = function(numRows) {
    const results = [];

    for (let i = 0; i < numRows; i++) {
        const row = [1]; // setiap baris selalu mulai dengan 1

        // hitung elemen tengah dari baris sebelumnya
        for (let j = 1; j < i; j++) {
          console.log(j, 'j')
            row.push(results[i - 1][j - 1] + results[i - 1][j]);
        }

        // setiap baris selalu diakhiri dengan 1 (kecuali baris pertama, sudah ada)
        if (i > 0) row.push(1);
        results.push(row);
        console.log(results, 'results')
    }

    return results;
};


console.log(generate(3))