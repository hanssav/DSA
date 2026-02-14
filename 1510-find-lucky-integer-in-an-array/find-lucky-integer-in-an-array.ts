function findLucky(arr: number[]): number {
    const map = new Map<number, number>(); 

    for(const num of arr){
        map.set(num, (map.get(num) || 0) + 1);
    }

    let lucky = -1; 

    for(const [key, val] of map) {
        if(key === val && key > lucky) lucky = key;
    }

    return lucky;
};