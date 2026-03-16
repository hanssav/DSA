function minimumIndex(capacity: number[], itemSize: number): number {
    let res = -1; 

    for(let i = 0; i < capacity.length; i++){
        if(capacity[i] >= itemSize && capacity[i] < (res >= 0 ? capacity[res] : Infinity)){
            res = i;
        }
    }

    return res;
};