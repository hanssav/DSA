function findDuplicates(nums: number[]): number[] {
    const set = new Set<number>(); 

    const res = []; 

    for(const num of nums){
        if(set.has(num)) {
            res.push(num);
            continue;
        };

        set.add(num);
    }

    return res;
};