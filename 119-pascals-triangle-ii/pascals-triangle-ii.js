/**
 * @param {number} rowIndex
 * @return {number[]}
 */





var getRow = function(rowIndex) {
    let res = [1]

    for(let i = 1; i <= rowIndex; i++) {
        let row = [1]; 
          
        for(let j = 1; j < i; j++){    
            row.push(res[j] + res[j-1])
        }
        
        if(i > 0) row.push(1)
        res = row
    }
    
    console.log(res, 'res')
    return res
};

console.log(getRow(0)); // [1]
console.log(getRow(1)); // [1,1]
console.log(getRow(4)); // [1,4,6,4,1]
console.log(getRow(5)); // [1,5,10,10,5,1]

