function isPossibleToSplit(nums: number[]): boolean {
    let m = new Map<number, number>()

    for(const num of nums){
        m.set(num, (m.get(num) || 0) + 1); 

        if(m.get(num) > 2) return false;
    }
    return true;
};