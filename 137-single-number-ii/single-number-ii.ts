function singleNumber(nums: number[]): number {
    const m = new Map<number, number>(); 

    for(const num of nums){
        m.set(num, (m.get(num) || 0) + 1);
        if(m.get(num) >= 3) m.delete(num); 
    }
    
    const [first] = m.keys();
    return first;
};