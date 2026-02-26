function uniqueOccurrences(arr: number[]): boolean {
    const counts = new Map<number, number>(); 

    for(const a of arr){
        counts.set(a, (counts.get(a) || 0) + 1);
    }; 

    const set = new Set<number>();

    for(const val of counts.values()){
        if(set.has(val)) return false;

        set.add(val);
    }

    return true;
};