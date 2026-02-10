function topKFrequent(nums: number[], k: number): number[] {
    let m = new Map<number, number>(); 

    for(const num of nums) m.set(num, (m.get(num) || 0) + 1); 

    const res: number[] = []; 

    const arr = [...m.entries()].sort((a, b) => b[1] - a[1]); 

    for(let i = 0; i < k; i++){
        const [a, b] = arr[i] || []

        res.push(a)
    }

    return res;
};