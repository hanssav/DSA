function findDuplicate(nums: number[]): number {
    const m = new Set();  

    for(const num of nums){
        if(m.has(num)) return num;

        m.add(num)
    }

    return -1; 
};