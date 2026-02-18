function minDeletion(s: string, k: number): number {
    const map = new Map<string, number>(); 

    for(const str of s){
        map.set(str, (map.get(str) || 0) + 1);
    }

    let sorted = [...map].sort((a, b) => a[1] - b[1]); 

    let count = 0; 

    while(sorted.length > k){
        let val = sorted.shift();
        count += val[1];
    }

    return count
};