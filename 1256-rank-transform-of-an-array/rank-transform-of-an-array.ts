function arrayRankTransform(arr: number[]): number[] {    
    let set = new Set<number>([...arr]);

    const sorted = [...set].sort((a, b) => a - b); 
    const map = new Map<number, number>(); 

    for(let i = 0; i < sorted.length; i++){
        map.set(sorted[i], i+1);
    }

    const res: number[] = []; 

    for(const num of arr){
        res.push(map.get(num));
    }

    return res;
};