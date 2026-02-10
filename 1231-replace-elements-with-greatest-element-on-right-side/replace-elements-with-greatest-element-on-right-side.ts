function replaceElements(arr: number[]): number[] {
    const res = [];
    const n = arr.length; 

    for(let i = 0; i < n; i++){
        let gr = -1; 

        for(let j = i + 1; j < n; j++){
            if(arr[j] > gr) gr = arr[j]
        }

        res.push(gr)
    }

    return res;
};