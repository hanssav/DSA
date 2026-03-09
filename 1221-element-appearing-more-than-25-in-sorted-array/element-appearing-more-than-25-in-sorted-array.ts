function findSpecialInteger(arr: number[]): number {
    const min = Math.ceil((25 / 100) * arr.length);

    let counts = new Map();

    let curr = -1;

    for(const num of arr){
        counts.set(num, (counts.get(num) || 0) + 1); 

        if(counts.get(num) >= min && num > curr) curr = num
    }

    return curr
};