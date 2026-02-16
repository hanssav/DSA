function intersection(nums: number[][]): number[] {
    const map = new Map<number, number>(); 

    for(const row of nums){
        for(const col of row){
            map.set(col, (map.get(col) || 0) + 1);
        }
    };

    const rows = nums.length;

    const res: number[] = []; 

    for(const [num, count] of map){
        if(count === rows) res.push(num);
    }

    return res.sort((a, b) => a - b);
};