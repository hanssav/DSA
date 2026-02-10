function replaceElements(arr: number[]): number[] {
    const res = [];
    const n = arr.length; 

    let max = 0; 

    for(let curr = 0; curr < n; curr++){
         if(curr === max){
            max = -1
            for(let j = curr + 1; j < n; j++){
                if(arr[j] > (arr[max] || 0)) max = j;
             }
         }

        res.push(arr[max] ?? -1)
    }

    return res;
};